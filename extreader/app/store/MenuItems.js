Ext.define('ExtReader.store.MenuItems', {
    extend: 'Ext.data.Store',
    model: 'ExtReader.model.MenuItem',
    proxy: {
        type: 'localstorage',
        id: 'rss-settings'
    }
});