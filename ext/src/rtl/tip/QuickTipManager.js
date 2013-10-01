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
Ext.define('Ext.rtl.tip.QuickTipManager', {
    override: 'Ext.tip.QuickTipManager',

    init: function() {
        var me = this;

        // Will return false if not ready to proceed
        if (me.callParent(arguments) !== false) {
            me.tip.on('beforeshow', me.onBeforeFirstShow, me, { single: true });
        }
    },

    onBeforeFirstShow: function(tip) {
        // The rtl override for AbstractComponent reads the DOM for floating components to
        // determine if their local coordinate system is RTL and caches the value.  If
        // QuickTipManager.init() is called before the Viewport has been rendered then the
        // cached value may be incorrect.  Clear the cached value so that the next call to
        // isLocalRtl() will read the DOM again. 
        tip._isOffsetParentRtl = undefined;
    }
});