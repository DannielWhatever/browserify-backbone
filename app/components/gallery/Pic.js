//Require libraries
import Backbone from 'backbone';


module.exports = Backbone.Model.extend({

  	initialize: function(){
	},

	defaults : {
		title: 'me',
		description: 'just me, coding hard',
		url: 'http://placehold.it/350x150'
	}
	
});	

