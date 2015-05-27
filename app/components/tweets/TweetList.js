
import Backbone from 'backbone';

import Tweet from './Tweet';

module.exports = Backbone.Collection.extend({
	
	model: Tweet,

  	initialize: function(){

    	this.on('add',function(){
    		console.log('se ha agregado aalgo a la collection');
    	});


	},

});