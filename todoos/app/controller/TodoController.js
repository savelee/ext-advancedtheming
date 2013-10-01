Ext.define('Todoos.controller.TodoController', {
	extend: 'Ext.app.Controller',
	views: [
			'Main',
			'GridView',
			'FormView'
	],
	stores: [
			'Todoos'
	],
	refs: [{
			ref: 'formView',
			selector: 'formview'
		}
	],
	init: function(application) {
		this.control({
			'gridviewer': {
				removeitem: this.removeItem,
				complete: this.completeItem,
				edit: this.editItem
			},
			'formview': {
				submitform: this.submitForm
			}
		})
	},

	//controller methods
	removeItem: function(el, grid, rowIndex, colIndex, item, event, record) {
		Ext.getStore('Todoos').remove(record);
		Ext.getStore('Todoos').sync();
	},
	editItem: function(editor, e) {
		var r = e.record;
		if(e.field === "note") r.set('note', e.value);
		if(e.field === "duedate") r.set('duedate', e.value);
		r.save();
	},
	completeItem: function(el, grid, rowIndex, colIndex, item, event, record){
		record.set('done', true);
		record.save();
		Ext.getStore('Todoos').load();
	},
	submitForm: function() {
		var form = this.getFormView().getForm();
		var m = Ext.create('Todoos.model.Todo');
		form.updateRecord(m);
		var v = m.validate();
		if (form.isValid() && v.isValid()) {
			m.save();
			Ext.getStore('Todoos').load();
			this.getFormView().down('textfield[name=note]').reset();
		} else {
			Ext.Msg.show({
				title: 'Oops',
				msg: 'Something went wrong. Please try again.',
				buttons: Ext.Msg.OK,
				icon: Ext.Msg.ERROR
			});
		};
	}


});