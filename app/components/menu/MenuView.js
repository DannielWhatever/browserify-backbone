
import Backbone from 'backbone';

import template from './MenuTemplate.hbs';

module.exports = Backbone.View.extend({
	el: '#menu',
	navBar: {
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
	},

	initialize: function(){
	    this.render();
	},

	render: function(){
		this.$el.html( template(this.navBar) );
		//this.remove();				
	}

});