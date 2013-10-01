Ext.define('ExtReader.model.RssFeed', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'link', type: 'string' },
        { name: 'origLink', type: 'string' },
        { name: 'pubDate', type: 'date' },
        { name: 'creator', type: 'string' },
        { name: 'category'},
    ]
});
