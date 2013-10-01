Ext.define('Todoos.store.Todoos', {
    extend: 'Ext.data.Store',
	model: 'Todoos.model.Todo',
    autoLoad: true
});