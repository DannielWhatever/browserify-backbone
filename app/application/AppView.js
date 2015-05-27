
import Backbone from 'backbone';

import template from './AppTemplate.hbs';

module.exports = Backbone.View.extend({
	el: '#app',
	aboutMe: null,

	initialize: function(){
	    
	    this.render();
	},

	render: function(){

		this.$el.html( template({}) );
						
	}

});