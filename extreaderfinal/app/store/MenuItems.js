Ext.define('ExtReaderFinal.store.MenuItems', {
    extend: 'Ext.data.Store',
    model: 'ExtReaderFinal.model.MenuItem',
    proxy: {
        type: 'localstorage',
        id: 'rss-settings'
    }
});