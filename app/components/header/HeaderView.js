
import Backbone from 'backbone';

import template from './HeaderTemplate.hbs';

module.exports = Backbone.View.extend({
	el: '#header',
	aboutMe: null,

	initialize: function(){
	    
		this.aboutMe = {
			name: 'Super blog',
			title: 'shalalala',
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

		this.$el.html( template(this.aboutMe) );
		//this.remove();				
	}

});