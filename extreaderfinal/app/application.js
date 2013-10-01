Ext.define('ExtReaderFinal.Application', {
    name: 'ExtReaderFinal',

    extend: 'Ext.app.Application',

    requires: [
    	'ExtReaderFinal.common.Functions', 
    	'ExtReaderFinal.common.Snippets'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: ['Main'],

    stores: [
        // TODO: add stores here
    ]
});
