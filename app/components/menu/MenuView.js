
import Backbone from 'backbone';

import template from './MenuTemplate.hbs';

module.exports = Backbone.View.extend({
	el: '#menu',
	navBar: null,

	initialize: function(){
	    
		this.navBar = {
			menu: [
						{
							link:'/#home',
							title:'Home'
						},
						{
							link:'/#social',
							title:'Social'
						}
					]
		};

	    this.render();
	},

	render: function(){

		this.$el.html( template(this.navBar) );
		//this.remove();				
	}

});