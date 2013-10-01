Ext.define('ExtReader.common.Functions', {
	singleton: true,
	requires: [
			'Ext.LoadMask',
			'Ext.data.JsonP',
			'ExtReader.model.RssFeed',
			'ExtReader.store.RssFeeds'
	],
	config: {
		url: '',
	},
	clearStore: function(){
        Ext.getStore('MenuItems').removeAll();
        Ext.getStore('MenuItems').sync();
        Ext.getStore('RssFeeds').removeAll();
        Ext.getStore('RssFeeds').sync();
        Ext.getStore('MenuTreeStore').getRootNode().removeAll();
        Common.Functions.prefillEmptyStore();
        Common.Functions.loadTreePanel();
	},
	prefillEmptyStore: function(){
		var m = Ext.create('ExtReader.model.MenuItem', {
			title: 'Sencha Blog',
			link: 'http://feeds.feedburner.com/SenchaBlog'
		});
		Ext.getStore('MenuItems').add(m);
		Ext.getStore('MenuItems').sync();
	},
	loadTreePanel: function() {
		Ext.getStore('MenuItems').load(function(records) {
			if(records.length > 0){
				Ext.getStore('MenuTreeStore').getRootNode().removeAll();
				var children = [];

				Ext.Array.each(records, function(rec) {
					children.push({
						text: rec.get('title'),
						id: rec.get('id'),
						leaf: true
					});
				});
				
				Ext.getStore('MenuTreeStore').getRootNode().appendChild(children);
			} else {
				Common.Functions.prefillEmptyStore();
			}
		});
	},
	getRssFeeds: function() {
		var me = this;
		var u = this.getUrl();

		url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feed%20where%20url%3D'" + Ext.String.escape(u) + "'&format=json";

		Ext.getBody().mask('Loading');

		Ext.getStore('RssFeeds').removeAll();
		Ext.getStore('RssFeeds').sync();

		Ext.data.JsonP.request({
			url: url,
			success: function(response) {
				try {
					Ext.getStore('RssFeeds').add(response.query.results.item);
					Ext.getStore('RssFeeds').sync();
				} catch (e) {
					console.log(e);
				}
				Ext.getBody().unmask();
			},
			failure: function() {
				Ext.getBody().unmask();
			}
		});
	}
});