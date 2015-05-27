
import Backbone from 'backbone';

module.exports = Backbone.Model.extend({
  	initialize: function(){

	},

	defaults : {
		user: 'me',
	},

	goToUsername: function(){
		document.location = 'https://twitter.com/'+this.attributes.user;
	}
});	

