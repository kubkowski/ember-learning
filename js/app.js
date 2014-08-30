App = Ember.Application.create();

var globalCounter = 0;
var Bookmark = Ember.Object.extend({
	to_link: function(){
		return "<a href='" + this.get("url") + "'>" + this.get("name") + "</a>";
	},
	formatted: function(){
		return this.get("name") + " - " + this.get("url");
	},
	link: function(){
		return this.to_link();
	}.property("name", "url"),
	updateCounter: Ember.observer(function(){
		globalCounter += 1;
		console.log("Global Counter has increased to: " + globalCounter);
	}, "name")
});


var bookmark = Bookmark.create({ name:'tutsplus', url:'http://tutsplus.com' });
bookmark.addObserver("url", function(){});


App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
