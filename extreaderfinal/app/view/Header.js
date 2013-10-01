Ext.define("ExtReaderFinal.view.Header", {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'head',
    requires: [
            'Ext.toolbar.TextItem',
            'Ext.menu.Menu',
            'Ext.toolbar.Spacer',
            'ExtReaderFinal.common.Functions',
            'Ext.Img'
    ],
    items: [{
            xtype: 'container',
            html: '<img src="resources/logo.png" height="25" alt="ExtReader"/>'
            //xtype: 'image',
            //src: 'resources/logo.png',
            //alt: 'ExtReader',
            //height: 25,
            //width: 200
        },
            '->', {
            text: 'Subscribe',
            glyph: '115@ExtReader',
            handler: function() {
                this.fireEvent('subscribe');
            }
        },
            '-', {
            //text: 'Help',
            glyph: '104@ExtReader',
            menu: {
                xtype: 'menu',
                items: [{
                        text: 'Reset',
                        handler: function() {
                            Common.Functions.clearStore();
                        }
                    }, {
                        text: 'About',
                        handler: function() {                        
                            var msgBox = Ext.create('Ext.window.MessageBox', {
                                buttonAlign: 'center',
                                ui: 'blue',
                                buttons: [{
                                    text: 'OK', 
                                    ui: 'blue',
                                    handler: function(){
                                        msgBox.hide();
                                    }
                                }]
                            })
                            msgBox.show({
                                height: 130,
                                title: 'About ExtReader',
                                msg: 'Sencha Inc. &copy; 2013'
                            });

                        }
                    }
                ]
            }
        },
        ' '
    ]
});