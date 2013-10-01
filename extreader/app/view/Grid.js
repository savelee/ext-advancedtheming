Ext.define('ExtReader.view.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridviewer',
	requires: [
		'Ext.grid.feature.Summary',
		'Ext.grid.column.Date'
		//'Ext.toolbar.Paging'
	],

	initComponent: function() {
		var me = this;
		Ext.apply(me, {

			/*dockedItems: [{
		        xtype: 'pagingtoolbar',
		        store: 'RssFeeds',
		        dock: 'bottom'
		    }],*/

			columns: [{
				text: 'Title',
				dataIndex: 'title',
				flex: 1,
				summaryType: 'count',
        		summaryRenderer: function(value, summaryData, dataIndex) {
            		return Ext.String.format('{0} feed{1}', value, value !== 1 ? 's' : ''); 
        		}
			},
			{
				text: 'Published',
				xtype: 'datecolumn',
		        dataIndex: 'pubDate',
		        format: 'd-m-Y'
			}
			],

			listeners: {
				select: function(selectionModel, record) {
					this.fireEvent('openFeed', record);
				}
			},

			features: [{
				ftype: 'summary'
			}],

		});
		me.callParent(arguments);
	}
});