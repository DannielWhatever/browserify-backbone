var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var template = require('../templates/Header.hbs');

Backbone.$ = $;


module.exports = Backbone.View.extend({
	el: '#header',
	aboutMe: null,

	initialize: function(){
	    
		aboutMe = {
			name: 'Daniel Gutiérrez',
			title: 'Web Developer',
			social: [
						{
							link:'https://github.com/DannielWhatever',
							iconclass:'fa fa-github'
						},
						{
							link:'https://www.linkedin.com/profile/view?id=216836458',
							iconclass:'fa fa-linkedin-square'
						}
					]
		};

	    this.render();
	},

	render: function(){

		this.$el.html( template(aboutMe) );
						
	}

});