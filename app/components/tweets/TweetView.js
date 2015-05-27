
import Backbone from 'backbone';

import template from './TweetTemplate.hbs';

module.exports = Backbone.View.extend({

	initialize: function(){
	    
	    this.render();
	},

	events: {
		'click label' : 'goToUsername'
	},

	render: function(){
		this.$el.html( template(this.model.toJSON()) );
		return this;				
	},

	goToUsername: function(e){
		this.model.goToUsername();
	}

});