Ext.define('Todoos.view.GridView', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridviewer',
	requires: [
	    'Ext.grid.*',
	    'Ext.dd.*'
	],
	selModel: {
		selType: 'rowmodel'
	},
	columns: [{
			xtype: 'booleancolumn',
			text: 'Done',
			width: 50,
			dataIndex: 'done',
			trueText: 'y',
			falseText: 'f',
		}, {
			text: 'Note',
			dataIndex: 'note',
			flex: 1,
			editor: {
				xtype: 'textfield'
			}
		}, {
			text: 'Due',
			width: 100,
			dataIndex: 'duedate',
			xtype: 'datecolumn',
			format: 'j F, Y',
			editor: {
				xtype: 'datefield'
			}
		}, {
			xtype: 'actioncolumn',
			width: 50,
			items: [{
					iconCls: 'done',
					tooltip: 'Completed?',
					handler: function(grid, rowIndex, colIndex, item, event, record) {
						this.up('gridviewer').fireEvent('complete', this, grid, rowIndex, colIndex, item, event, record);
					}
				}, {
					iconCls: 'delete',
					tooltip: 'Delete',
					handler: function(grid, rowIndex, colIndex, item, event, record) {
						this.up('gridviewer').fireEvent('removeitem', this, grid, rowIndex, colIndex, item, event, record);
					}
				}
			]
		}
	],
	viewConfig: {
		plugins: {
			ptype: 'gridviewdragdrop',
			dragText: 'Drag and drop to reorganize'
		}
	},
	plugins: [{
			ptype: 'cellediting',
			clicksToEdit: 2
		}
	]
});