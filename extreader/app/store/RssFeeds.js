Ext.define('ExtReader.store.RssFeeds', {
  extend: 'Ext.data.Store',
  requires: ['Ext.data.proxy.LocalStorage'],
  model: 'ExtReader.model.RssFeed',
  //pageSize: 20,
  proxy: {
    type: 'localstorage',
    id: 'feeds'
  },
  autoLoad: true
});