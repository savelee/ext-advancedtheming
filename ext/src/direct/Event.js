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
 * Base class for all Ext.direct events. An event is
 * created after some kind of interaction with the server.
 * The event class is essentially just a data structure
 * to hold a Direct response.
 */
Ext.define('Ext.direct.Event', {
    alias: 'direct.event',

    status: true,

    /**
     * Creates new Event.
     * @param {Object} [config] Config object.
     */
    constructor: function(config) {
        Ext.apply(this, config);
    },
    
    /**
     * Return the name for this event.
     * @return {String} The name of event
     */
    getName: function() {
        return this.name;
    },

    /**
     * Return the raw data for this event.
     * @return {Mixed} The data from the event
     */
    getData: function() {
        return this.data;
    }
});
