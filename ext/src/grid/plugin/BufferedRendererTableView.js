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
 * @private
 * A set of overrides required by the presence of the BufferedRenderer plugin.
 * 
 * These overrides of Ext.view.Table take into account the affect of a buffered renderer and
 * divert execution from the default course where necessary.
 */
Ext.define('Ext.grid.plugin.BufferedRendererTableView', {
    override: 'Ext.view.Table',

    // Listener function for the Store's add event
    onAdd: function(store, records, index) {
        var me = this,
            bufferedRenderer = me.bufferedRenderer,
            rows = me.all;

        // The newly added records will put us over the buffered view size, so we cannot just add as normal.
        if (me.rendered && bufferedRenderer && (rows.getCount() + records.length) > bufferedRenderer.viewSize) {

            // Index puts the new row(s) in the visible area, then we have to refresh the view
            if (index < rows.startIndex + bufferedRenderer.viewSize && (index + records.length) > rows.startIndex) {
                me.refreshView();
            }
            // New rows outside of visible area, just ensure that the scroll range is updated
            else {
                bufferedRenderer.stretchView(me, bufferedRenderer.getScrollHeight());
            }
        }
        // No BufferedRenderer present
        // or
        // View has not yet reached the viewSize: we can add as normal.
        else {
            me.callParent([store, records, index]);
        }
    },

    onRemove: function(store, records, indices) {
        var me = this,
            bufferedRenderer = me.bufferedRenderer,
            storeSize, all, startIndex;

        // Ensure all records are removed from the view
        me.callParent([store, records, indices]);

        // If there's a BufferedRenderer, the view must refresh to keep the view correct.
        // Removing *may* have removed all of the rendered rows, leaving whitespace below the group header, 
        // so the buffered renderer will be needed to keep the buffer rendered zone valid - to pull records up from
        // below the removed zone into visibility.
        if (me.rendered && bufferedRenderer) {
            storeSize = me.dataSource.getCount();
            all = me.all;
            // If that remove left a gap below the rendered range, ask the buffered renderer to render its
            // current view size. This will do the minimum work required, and *append* rows to the table only
            // if necessary
            if (storeSize > all.getCount()) {
                startIndex = all.startIndex;
                bufferedRenderer.renderRange(startIndex, Math.min(startIndex + bufferedRenderer.viewSize, storeSize) - 1);
            }
            // No overflow, still we have to ensure the scroll range is updated
            else {
                bufferedRenderer.stretchView(me, bufferedRenderer.getScrollHeight());
            }
        }
    },

    // When there's a buffered renderer present, store refresh events cause TableViews to go to scrollTop:0
    onDataRefresh: function() {
        var me = this;

        if (me.bufferedRenderer) {
            // Clear NodeCache. Do NOT remove nodes from DOM - that would blur the view, and then refresh will not refocus after the refresh.
            me.all.clear();
            me.bufferedRenderer.onStoreClear();
        }
        me.callParent();
    }
});
