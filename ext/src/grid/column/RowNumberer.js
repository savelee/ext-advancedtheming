/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

Pre-release code in the Ext repository is intended for development purposes only and will
not always be stable. 

Use of pre-release code is permitted with your application at your own risk under standard
Ext license terms. Public redistribution is prohibited.

For early licensing, please contact us at licensing@sencha.com

Build date: 2013-09-24 09:54:40 (49c9fcbdd1f9639004ca99870d3b40d46aa40089)
*/
/**
 * A special type of Grid {@link Ext.grid.column.Column} that provides automatic
 * row numbering.
 * 
 * Usage:
 *
 *     columns: [
 *         {xtype: 'rownumberer'},
 *         {text: "Company", flex: 1, sortable: true, dataIndex: 'company'},
 *         {text: "Price", width: 120, sortable: true, renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
 *         {text: "Change", width: 120, sortable: true, dataIndex: 'change'},
 *         {text: "% Change", width: 120, sortable: true, dataIndex: 'pctChange'},
 *         {text: "Last Updated", width: 120, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
 *     ]
 *
 */
Ext.define('Ext.grid.column.RowNumberer', {
    extend: 'Ext.grid.column.Column',
    alternateClassName: 'Ext.grid.RowNumberer',
    alias: 'widget.rownumberer',

    /**
     * @cfg {String} text
     * Any valid text or HTML fragment to display in the header cell for the row number column.
     */
    text: "&#160;",

    /**
     * @cfg {Number} width
     * The default width in pixels of the row number column.
     */
    width: 23,

    /**
     * @cfg {Boolean} sortable
     * @hide
     */
    sortable: false,
    
    /**
     * @cfg {Boolean} [draggable=false]
     * False to disable drag-drop reordering of this column.
     */
    draggable: false,

    // Flag to Lockable to move instances of this column to the locked side.
    autoLock: true,

    // May not be moved from its preferred locked side when grid is enableLocking:true
    lockable: false,

    align: 'right',

    constructor : function(config){
        var me = this;

        // Copy the prototype's default width setting into an instance property to provide
        // a default width which will not be overridden by AbstractContainer.applyDefaults use of Ext.applyIf
        me.width = me.width;

        me.callParent(arguments);
        me.scope = me;
    },

    beforeRender: function() {
        var rowBody = this.up('gridpanel').view.findFeature('rowbody');

        this.callParent(arguments);

        // If there is a RowBody Feature, and this coliumn is index 1 (immediately after the expander)...
        // the RowBody cell must not span this column, and this column must span into the expander row.
        if (rowBody && this.ownerCt.items.indexOf(this) === 1) {
            rowBody.colSpanDecrement = rowBody.colSpanDecrement + 1;
            this.rowspan = 2;
        }
    },

    // private
    resizable: false,
    hideable: false,
    menuDisabled: true,
    dataIndex: '',
    cls: Ext.baseCSSPrefix + 'row-numberer',
    tdCls: Ext.baseCSSPrefix + 'grid-cell-row-numberer ' + Ext.baseCSSPrefix + 'grid-cell-special',
    innerCls: Ext.baseCSSPrefix + 'grid-cell-inner-row-numberer',
    rowspan: undefined,

    // private
    renderer: function(value, metaData, record, rowIdx, colIdx, dataSource, view) {
        var rowspan = this.rowspan,
            page = dataSource.currentPage,
            result = view.store.indexOf(record);

        if (rowspan) {
            metaData.tdAttr = 'rowspan="' + rowspan + '"';
        }

        if (page > 1) {
            result += (page - 1) * dataSource.pageSize; 
        }
        return result + 1;
    }
});
