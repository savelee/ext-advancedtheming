Ext.define('ExtReader.view.Viewport', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    requires: [
            'Ext.layout.container.Border',
            'Ext.tree.Panel',
            'ExtReader.view.Header',
            'ExtReader.view.Grid'
    ],

    layout: {
        type: 'border'
    },

    items: [{
            region: 'north',
            xtype: 'head',
            height: 50,
            cls: 'header'
        }, {
            region: 'west',
            xtype: 'treepanel',
            title: 'Feeds',
            collapsible: true,
            split: true,
            store: 'MenuTreeStore',
            rootVisible: false,
            width: 180
        }, {
            region: 'center',
            layout: {
                type: 'border'
            },
            items: [{
                    region: 'north',
                    xtype: 'gridviewer',
                    store: 'RssFeeds',
                    flex: 1,
                    split: true,
                }, {
                    region: 'center',
                    flex: 3,
                    cls: 'main',
                    autoScroll: true,
                    tpl: ExtReader.common.Snippets.rss,
                    split: true,
                    dockedItems: [{
                            xtype: 'toolbar',
                            //TODO ui for gray toolbar here
                            dock: 'bottom',
                            layout: {
                                type: 'hbox',
                                pack: 'center'
                            },
                            items: [{
                                    xtype: 'button',
                                    dock: 'bottom',
                                    //TODO ui for blue button here
                                    scale: 'medium',
                                    margin: 5,
                                    width: 50,
                                    hidden: true,
                                    handler: function() {
                                        this.fireEvent('prev');
                                    },
                                    action: 'prev',
                                    text: '<'
                                }, {
                                    xtype: 'button',
                                    dock: 'bottom',
                                    //TODO ui for blue button here
                                    scale: 'medium',
                                    margin: 5,
                                    width: 50,
                                    handler: function() {
                                        this.fireEvent('next');
                                    },
                                    action: 'next',
                                    text: '>'
                                }
                            ]
                        }
                    ]
                }
            ],
            margin: '0 0 0 5',
            split: true
        }, {
            region: 'south',
            xtype: 'component',
            margin: '5'
        }
    ]
});