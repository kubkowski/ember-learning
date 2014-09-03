App.AlertView = Ember.View.extend({
	templateName: "_alert",
	tagName: "h3",
	classNameBindings: [ "defaultClass", "kind"],
	defaultClass: "alert-box",
	kind: null,

	click: function() {
		this.$().fadeOut(300, function(){ this.remove(); });
	},
	didInsertElement: function() {
		this.$().hide().fadeIn(300);
	} 
});