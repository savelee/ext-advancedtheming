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
Ext.define('Ext.rtl.button.Button', {
    override: 'Ext.button.Button',

    getBtnWrapFrameWidth: function(side) {
        if (this.getHierarchyState().rtl && side === 'r') {
            side = 'l';
        }
        return this.callParent(arguments);
    },

    getTriggerRegion: function() {
        var me = this,
            region = me._triggerRegion;

        if (!Ext.rootHierarchyState.rtl !== !this.getHierarchyState().rtl
            && me.arrowAlign === 'right') {
            region.begin = 0;
            region.end = me.getTriggerSize();
        } else {
            region = me.callParent();
        }

        return region;
    }
});