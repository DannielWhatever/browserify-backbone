var $ = require('jquery');
var Backbone = require('backbone');

var template = require('../templates/Contact.hbs');

Backbone.$ = $;


module.exports = Backbone.View.extend({
	el: '#contact',
	aboutMe: null,

	initialize: function(){
	    
	    this.render();
	},

	render: function(){

		this.$el.html( template({}) );
						
	}

});