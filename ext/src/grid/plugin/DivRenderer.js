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
Ext.define('Ext.grid.plugin.DivRenderer', {
    alias: 'plugin.divrenderer',
    extend: 'Ext.AbstractPlugin',

    tableTpl: [
        '<div id="{view.id}-table" class="', Ext.baseCSSPrefix, '{view.id}-table ', Ext.baseCSSPrefix, 'grid-table" style="{tableStyle}" {ariaTableAttr}>',
            '{%',
                'values.view.renderRows(values.rows, values.viewStartIndex, out);',
            '%}',
        '</div>',
        {
            priority: 0
        }
    ],

    rowTpl: [
        '{%',
            'var dataRowCls = values.recordIndex === -1 ? "" : " ' + Ext.baseCSSPrefix + 'grid-data-row";',
        '%}',
        '<dl {[values.rowId ? ("id=\\"" + values.rowId + "\\"") : ""]} ',
            'data-boundView="{view.id}" ',
            'data-recordId="{record.internalId}" ',
            'data-recordIndex="{recordIndex}" ',
            'class="{[values.itemClasses.join(" ")]} {[values.rowClasses.join(" ")]}{[dataRowCls]}" ',
            'style="position:relative" ',
            '{rowAttr:attributes} {ariaRowAttr}>',
            '<tpl for="columns">' +
                '{%',
                    'parent.view.renderCell(values, parent.record, parent.recordIndex, xindex - 1, out, parent)',
                 '%}',
            '</tpl>',
        '</dl>',
        {
            priority: 0
        }
    ],

    cellTpl: [
        '<dt class="{tdCls}" {tdAttr} data-cellIndex="{cellIndex}" {ariaCellAttr}>',
            '<div {unselectableAttr} class="' + Ext.baseCSSPrefix + 'grid-cell-inner"',
                'style="text-align:{align};<tpl if="style">{style}</tpl>" {ariaCellInnerAttr}>{value}</div>',
        '</dt>', {
            priority: 0
        }
    ],

    selectors: {
        // Outer table
        bodySelector: 'div',

        // Element which contains rows
        nodeContainerSelector: 'div',

        // view item (may be a wrapper)
        itemSelector: 'dl.' + Ext.baseCSSPrefix + 'grid-row',

        // row which contains cells as opposed to wrapping rows
        dataRowSelector: 'dl.' + Ext.baseCSSPrefix + 'grid-data-row',

        // cell
        cellSelector: 'dt.' + Ext.baseCSSPrefix + 'grid-cell',

        innerSelector: 'div.' + Ext.baseCSSPrefix + 'grid-cell-inner',

        getNodeContainerSelector: function() {
            return this.getBodySelector();
        },

        getNodeContainer: function() {
            return this.el.getById(this.id + '-table', true);
        }
    },

    init: function(grid) {
        var view = grid.getView();
        view.tableTpl = Ext.XTemplate.getTpl(this, 'tableTpl');
        view.rowTpl   = Ext.XTemplate.getTpl(this, 'rowTpl');
        view.cellTpl  = Ext.XTemplate.getTpl(this, 'cellTpl');
        Ext.apply(view, this.selectors);
    }
});