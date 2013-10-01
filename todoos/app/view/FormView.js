Ext.define('Todoos.view.FormView', {
	extend: 'Ext.form.Panel',
	alias: 'widget.formview',
	requires: [
			'Ext.layout.container.Form',
			'Ext.form.FieldSet',
			'Ext.form.Label',
			'Ext.form.field.Date',
			'Ext.button.Button'
	],
	layout: 'anchor',
	title: 'Add todo',
	defaults: {
		anchor: '100%',
		autoCapitalize: true,
		labelPad: 10,
		xtype: 'textfield',
		padding: 10,
	},
	items: [{
            cls: 'task-form',
			name: 'note',
			fieldLabel: 'Description',
			allowBlank: false,
			required: true,
			emptyText: 'Enter todo decription',
			enableKeyEvents: true,
			listeners: {
				keyup: function(form, e){
					if(e.button == 12) Ext.ComponentQuery.query('formview')[0].fireEvent('submitform');
				}
			}
		},{
        xtype:'fieldset',
        padding: '0 10',
        margin: 5,
        title: 'Set due date',
        checkboxToggle: true,
        collapsed: true,
        layout:'anchor',
        items :[{
            xtype: 'datefield',
            anchor: '100%',
            fieldLabel: 'Due',
            name: 'duedate',
            value: new Date()
        }]
    }
	],
	buttons: [{
			xtype: 'button',
			action: 'save',
            scale: 'large',
			scope: this,
			text: 'Save',
			handler: function(){
				Ext.ComponentQuery.query('formview')[0].fireEvent('submitform');
			}
		}
	]
});