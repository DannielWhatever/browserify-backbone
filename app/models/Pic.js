var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  	initialize: function(){
    	console.log('se ha creado una nueva photo c:');
	},
	defaults : {
		title: 'me',
		description: 'just me, coding hard',
		url: 'http://placehold.it/350x150'
	}
});	

