Ext.define('Todoos.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
            'Ext.layout.container.Border',
            'Ext.form.Panel'
    ],
    
    xtype: 'main',

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'toolbar',
        region: 'north',
        height: 100,
        items: [
        {
            xtype: 'container',
            cls: 'title',
            html: 'Todoos'
        }]
    },{
        xtype: 'gridviewer',
        region: 'center',
        store: 'Todoos',
        flex: 1
    },{
        region: 'south',
        height: 160,
        xtype: 'formview'
    }]
});