App.Bookmark = DS.Model.extend({
	name: DS.attr("string"),
	url: DS.attr("string")
});

App.Bookmark.FIXTURES = [
	{
		id: 1,
		name: "Tuts+",
		url: "http://tutsplus.com"
	},
	{
		id: 2,
		name: "Google",
		url: "http://google.com"
	}
];