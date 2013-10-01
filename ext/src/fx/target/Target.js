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
 * @class Ext.fx.target.Target

This class specifies a generic target for an animation. It provides a wrapper around a
series of different types of objects to allow for a generic animation API.
A target can be a single object or a Composite object containing other objects that are 
to be animated. This class and it's subclasses are generally not created directly, the 
underlying animation will create the appropriate Ext.fx.target.Target object by passing 
the instance to be animated.

The following types of objects can be animated:

- {@link Ext.fx.target.Component Components}
- {@link Ext.fx.target.Element Elements}
- {@link Ext.fx.target.Sprite Sprites}

 * @markdown
 * @abstract
 */
Ext.define('Ext.fx.target.Target', {

    isAnimTarget: true,

    /**
     * Creates new Target.
     * @param {Ext.Component/Ext.Element/Ext.draw.Sprite} target The object to be animated
     */
    constructor: function(target) {
        this.target = target;
        this.id = this.getId();
    },
    
    getId: function() {
        return this.target.id;
    },
    
    remove: function() {
        Ext.destroy(this.target);
    }
});
