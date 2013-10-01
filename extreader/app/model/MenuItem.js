Ext.define('ExtReader.model.MenuItem', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.UuidGenerator'],
	idgen: 'uuid',
	fields: [{
			name: 'id',
			type: 'auto'
		}, {
			name: 'title',
			type: 'string'
		}, {
			name: 'link',
			type: 'string'
		}, {
			name: 'category',
			type: 'string'
		}
	],
	validations: [{
			field: 'title',
			type: 'presence'
		}, {
			field: 'link',
			type: 'presence'
		}
	]
});