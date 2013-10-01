Ext.define('Todoos.model.Todo', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.UuidGenerator'],
	idgen: 'uuid',
	fields: [{
			name: 'id',
			type: 'auto'
		}, {
			name: 'note',
			type: 'string'
		}, {
			name: 'duedate',
			type: 'date',
			value: new Date()
		}, {
			name: 'done',
			type: 'boolean',
			value: false
		}
	],
	proxy: {
		type: 'localstorage',
		id: 'todo'
	},
});