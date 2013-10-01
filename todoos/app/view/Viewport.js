Ext.define('Todoos.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'Ext.ux.layout.Center',
        'Todoos.view.Main'
    ],

    layout:'ux.center',

    items: [{
        xtype: 'main',
        widthRatio: 0.50,
        heightRatio: 0.75
    }]
});
