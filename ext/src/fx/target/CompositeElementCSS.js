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
/**
 * @class Ext.fx.target.CompositeElementCSS
 * 
 * This class represents a animation target for a {@link Ext.CompositeElement}, where the
 * constituent elements support CSS based animation. It allows each {@link Ext.Element} in 
 * the group to be animated as a whole. In general this class will not be created directly, 
 * the {@link Ext.CompositeElement} will be passed to the animation and the appropriate target 
 * will be created.
 */
Ext.define('Ext.fx.target.CompositeElementCSS', {

    /* Begin Definitions */

    extend: 'Ext.fx.target.CompositeElement',

    requires: ['Ext.fx.target.ElementCSS'],

    /* End Definitions */
    setAttr: function() {
        return Ext.fx.target.ElementCSS.prototype.setAttr.apply(this, arguments);
    }
});