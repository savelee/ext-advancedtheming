Ext.define('ExtReader.controller.Main', {
	extend: 'Ext.app.Controller',
	requires: ['Ext.layout.container.Anchor', 'Ext.form.Panel','Ext.window.MessageBox'],
	models: ['RssFeed'],
	stores: ['RssFeeds', 'MenuItems', 'MenuTreeStore'],

	refs: [{
			ref: 'main',
			selector: 'viewport panel[cls=main]'
		},
		{
			ref: 'gridviewer',
			selector: 'gridviewer'
		}
	],

	init: function() {
		this.control({
			'gridviewer': {
				select: this.onGridSelect
			},
			'treepanel': {
				itemclick: this.onMenuSelect
			},
			'head button': {
				subscribe: this.onSubscribe
			},
			'button' : {
				next: this.onNextFeed,
				prev: this.onPrevFeed
			}
		});

		ExtReader.common.Functions.loadTreePanel();
	},

	onGridSelect: function(grid, rec, i) {
		this.getMain().update(rec.getData());
	},
	onMenuSelect: function(tree, rec, i) {
		var id = rec.get('id');
		var m = Ext.getStore('MenuItems').getById(id);
		Common.Functions.setUrl(m.get('link'));
		Common.Functions.getRssFeeds();
	},
	onSubscribe: function() {

		var window = Ext.create('Ext.window.Window', {
			title: 'Subscribe to RSS feeds',
			height: 140,
			width: 300,
			//add a glyph here,
			layout: 'anchor',
			items: [{
					xtype: 'form',
					defaults: {
						xtype: 'textfield',
						anchor: '100%'
					},
					items: [{
							fieldLabel: 'Title',
							name: 'title',
							emptyText: 'Name of the feed',
							allowBlank: false,
							minLength: 2,
						}, {
							fieldLabel: 'Url',
							name: 'link',
							emptyText: 'http://',
							vtype:'url',
							allowBlank: false,
							minLength: 2,
						}
					],
					buttons: [{
							text: 'Submit',
							formBind: true,
							handler: function() {
								var form = this.up('form').getForm();
								var m = Ext.create('ExtReader.model.MenuItem', {});
								form.updateRecord(m);
								var v = m.validate();
								if (form.isValid() && v.isValid()) {
									Ext.getStore('MenuItems').add(m);
									Ext.getStore('MenuItems').sync();
									Common.Functions.loadTreePanel();
									window.hide();
								} else {
									Ext.Msg.show({
										title: 'Oops',
										msg: 'Something went wrong. Please try again.',
										buttons: Ext.Msg.OK,
										icon: Ext.Msg.ERROR
									});
								};
							}
						}
					]
				}
			]

		}).show();

	},
	onNextFeed: function(){
		var selected = this.getGridviewer().getSelectionModel().getLastSelected();
		var i = Ext.getStore('RssFeeds').indexOf(selected)+1;
		var max = Ext.getStore('RssFeeds').count();

		if(i > 0) {
			Ext.ComponentQuery.query('button[action=prev]')[0].show();
			this.getGridviewer().getSelectionModel().select(i);
			if(i >= max-1) {
				Ext.ComponentQuery.query('button[action=next]')[0].hide();
			} else {
				Ext.ComponentQuery.query('button[action=next]')[0].show();
			}

		} else {
			Ext.ComponentQuery.query('button[action=prev]')[0].hide();
			this.getGridviewer().getSelectionModel().select(0);
		}
	},
	onPrevFeed: function(){
		var selected = this.getGridviewer().getSelectionModel().getLastSelected();
		var i = Ext.getStore('RssFeeds').indexOf(selected)+1;
		var max = Ext.getStore('RssFeeds').count();

		if(i > 2) {
			this.getGridviewer().getSelectionModel().select(i-2);
			if(i >= max-1) {
				Ext.ComponentQuery.query('button[action=next]')[0].hide();
			} else {
				
				Ext.ComponentQuery.query('button[action=next]')[0].show();
			}
		} else {
			this.getGridviewer().getSelectionModel().select(0);
			Ext.ComponentQuery.query('button[action=prev]')[0].hide();
		}
	}
});