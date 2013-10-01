Ext.define('ExtReaderFinal.store.RssFeeds', {
  extend: 'Ext.data.Store',
  requires: ['Ext.data.proxy.LocalStorage'],
  model: 'ExtReaderFinal.model.RssFeed',
  //pageSize: 20,
  proxy: {
    type: 'localstorage',
    id: 'feeds'
  },
  autoLoad: true
});