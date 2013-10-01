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
Ext.define('Ext.rtl.layout.container.CheckboxGroup', {
    override: 'Ext.layout.container.CheckboxGroup',
    
    finishedLayout: function(){
        var owner = this.owner;
        
        // In some cases in IE the groups get visually positioned
        // in the wrong spot, though via the inspector they are in
        // the correct place, so we need to kick off a repaint here.
        if ((Ext.isIE6 || Ext.isIE7 || Ext.isIEQuirks) && owner.getHierarchyState().rtl) {
            this.innerCt.select('.' + owner.groupCls).repaint();
        }
    }
})
