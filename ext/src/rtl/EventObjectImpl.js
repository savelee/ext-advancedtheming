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
Ext.define('Ext.rtl.EventObjectImpl', {
    override: 'Ext.EventObjectImpl',
    
    getXY: function() {
        var xy = this.xy;

        if (!xy) {
            xy = this.callParent();
            // since getXY is a page-level concept, we only need to check the
            // rootHierarchyState once to see if all successive calls to getXY() should have
            // their x-coordinate converted to rtl.
            if (this.rtl || (this.rtl = Ext.rootHierarchyState.rtl)) {
                xy[0] = Ext.Element.getViewportWidth() - xy[0];
            }
        }
        return xy;
    }

});