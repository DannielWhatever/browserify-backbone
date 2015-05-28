
import Backbone from 'backbone';

import Post from './Post';

module.exports = Backbone.Collection.extend({
	
	model: Post,

	url: 'http://localhost:3000/api/posts',

  	initialize: function(){

	},

});