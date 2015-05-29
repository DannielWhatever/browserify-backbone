
import Backbone from 'backbone';

import template from './PostTemplate.hbs';

module.exports = Backbone.View.extend({

	initialize: function(){    
	},

	events: {
		'click label' : 'goToUsername'
	},

	render: function(){
		this.$el.html( template(this.model.toJSON()) );
		return this;				
	}

});