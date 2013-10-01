Ext.define("ExtReader.view.Header", {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'head',
    requires: [
            'Ext.toolbar.TextItem',
            'Ext.menu.Menu',
            'Ext.toolbar.Spacer',
            'ExtReader.common.Functions'
    ],
    items: [{
            xtype: 'container',
            html: 'ExtReader' //TODO: add an image tag here
        },
            '->', {
            text: 'Subscribe',
            //TODO: add a glyph here,
            handler: function() {
                this.fireEvent('subscribe');
            }
        },
            '-', {
            text: 'Help',
            //TODO: add a glyph here and remove the text:'Help' property,
            menu: {
                xtype: 'menu',
                plain: true,
                items: [{
                        text: 'Reset',
                        handler: function() {
                             ExtReader.common.Functions.clearStore();
                        }
                    }, {
                        text: 'About',
                        handler: function() {                        
                            var msgBox = Ext.create('Ext.window.MessageBox', {
                                buttonAlign: 'center',
                                //TODO add blue ui for windows here
                                buttons: [{
                                    text: 'OK', 
                                    //TODO add blue ui here
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