var $ = require('jquery');
var Backbone = require('backbone');

var template = require('../templates/Post.hbs');

Backbone.$ = $;


module.exports = Backbone.View.extend({
	el: '#post',
	aboutMe: null,

	initialize: function(){
	    
	    this.render();
	},

	render: function(){

		this.$el.html( template({}) );
						
	}

});