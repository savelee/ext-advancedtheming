Ext.define('ExtReader.Application', {
    name: 'ExtReader',

    extend: 'Ext.app.Application',
    requires: [
        'ExtReader.common.Functions', 
        'ExtReader.common.Snippets'
    ],
    controllers: [
        'Main'
    ],
});
