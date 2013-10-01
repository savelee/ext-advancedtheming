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
Ext.define('Ext.rtl.layout.container.Column', {
    override: 'Ext.layout.container.Column',

    // Override to put the RTL class onto the innerCt so that columns can have a rule which switches float direction
    getRenderData: function () {
        var renderData = this.callParent();

        if (this.owner.getHierarchyState().rtl) {
            renderData.innerCtCls =
                (renderData.innerCtCls || '') + ' ' + Ext.baseCSSPrefix + 'rtl';
        }
        
        return renderData;
    }
});
