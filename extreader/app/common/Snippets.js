Ext.define('ExtReader.common.Snippets', {
	singleton: true,
	rss: new Ext.XTemplate('<h1>{title}</h1>',
		'<small><span class="creator">{creator}</span> {pubDate:date("F j, Y")}</small>',
		'<p>{description}</p>',
		'<a href="{origLink}" class="x-btn-button">Open in browser</a>'
	)
});