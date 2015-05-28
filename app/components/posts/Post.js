
import Backbone from 'backbone';

module.exports = Backbone.Model.extend({

	urlRoot: 'http://localhost:3000/api/posts',

  	initialize: function(){

	},

	defaults: function(){
		return {
			'createdDate': new Date(),
			'modifiedDate': new Date()
		}
	}

});	

