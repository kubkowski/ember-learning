App.DemotemplateController = Ember.ObjectController.extend({
	booleanValue: true,
	toggle: function(){
		this.set("booleanValue", !this.get("booleanValue"));
	},
	list: [
	{name: 'Jose Mota'},
	{name: 'Jeffrey Way'}
	]


});