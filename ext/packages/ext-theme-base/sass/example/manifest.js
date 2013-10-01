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
/*
 * This file defines the core framework "manifest". These are the components and ui's
 * common to all themes.
 * 
 * To add more components or ui's to a derived theme, call Ext.theme.addManifest in a
 * theme-specific file and script tag that file in to that theme's 'theme.html' file.
 */
Ext.theme.addManifest(
        {
            xtype: 'widget.menu',
            folder: 'menu',
            delegate: '.' + Ext.baseCSSPrefix + 'menu-item-link',
            filename: 'menu-item-active',
            config: {
                floating: false,
                width: 200,
                items: [
                    {
                        text: '&nbsp;',
                        cls: Ext.baseCSSPrefix + 'menu-item-active'
                    }
                ]
            }
        },

        {
            xtype: 'widget.button',
            ui: 'default'
        },

        {
            xtype: 'widget.toolbar',
            ui: 'default'
        },

        {
            xtype: 'widget.panel',
            ui: 'default'
        },

        {
            xtype: 'widget.header',
            ui: 'default'
        },

        {
            xtype: 'widget.window',
            ui: 'default'
        },

        {
            xtype: 'widget.tab',
            ui: 'default'
        },

        {
            xtype: 'widget.tabbar',
            ui: 'default'
        },

        {
            xtype: 'widget.progressbar',
            ui: 'default'
        },

        {
            xtype: 'widget.buttongroup',
            ui: 'default'
        },

        //tips
        {
            xtype: 'widget.tooltip',
            filename: 'tip',
            ui: 'default'
        },
        {
            xtype: 'widget.tooltip',
            ui: 'form-invalid'
        },

        /**
         * Grid column header backgrounds
         */
        {
            xtype: 'widget.gridcolumn',
            folder: 'grid',
            filename: 'column-header',
            config: {
                text: 'test',
                afterRender: function() {
                    var me = this,
                        el = me.el;

                    el.addCls(Ext.baseCSSPrefix + 'column-header-align-' + me.align).addClsOnOver(me.overCls);

                    el.setStyle({
                        position: 'relative'
                    });
                }
            }
        },
        {
            xtype: 'widget.gridcolumn',
            folder: 'grid',
            filename: 'column-header-over',
            config: {
                text: 'test',
                afterRender: function() {
                    var me = this,
                        el = me.el;

                    el.addCls(Ext.baseCSSPrefix + 'column-header-align-' + me.align).addClsOnOver(me.overCls);

                    el.setStyle({
                        position: 'relative'
                    });
                    el.addCls(Ext.baseCSSPrefix + 'column-header-over');
                }
            }
        },

        /**
         * Grid special cell background
         */
        // {
        //     xtype: 'widget.gridpanel',
        //     folder: 'grid',
        //     filename: 'cell-special',
        //     delegate: '.' + Ext.baseCSSPrefix + 'grid-cell-special',
        //     config: {
        //         selModel: Ext.create('Ext.selection.CheckboxModel'),
        //         store: Ext.create('Ext.data.ArrayStore', {
        //             fields: ['text'],
        //             data: [['my text']]
        //         }),
        //         columns: [
        //             {
        //                 text: 'Title',
        //                 flex: 1,
        //                 dataIndex: 'text'
        //             }
        //         ],
        //         width: 400,
        //         height: 100,
        //         title: 'Panel'
        //     }
        // },
        // {
        //     xtype: 'widget.gridpanel',
        //     folder: 'grid',
        //     filename: 'cell-special-selected',
        //     delegate: '.' + Ext.baseCSSPrefix + 'grid-cell-special',
        //     cls: 'x-grid-row-selected',
        //     config: {
        //         selModel: Ext.create('Ext.selection.CheckboxModel'),
        //         store: Ext.create('Ext.data.ArrayStore', {
        //             fields: ['text'],
        //             data: [['my text']]
        //         }),
        //         columns: [
        //             {
        //                 text: 'Title',
        //                 flex: 1,
        //                 dataIndex: 'text'
        //             }
        //         ],
        //         width: 400,
        //         height: 100,
        //         title: 'Panel'
        //     }
        // },

        /**
         * DatePicker
         */
        {
            xtype: 'widget.datepicker',
            folder: 'datepicker',
            filename: 'datepicker-header',
            delegate: '.' + Ext.baseCSSPrefix + 'datepicker-header'
        },
        {
            xtype: 'widget.datepicker',
            folder: 'datepicker',
            filename: 'datepicker-footer',
            delegate: '.' + Ext.baseCSSPrefix + 'datepicker-footer'
        },
        {
            xtype: 'widget.roweditorbuttons',
            ui: 'default'
        }
);