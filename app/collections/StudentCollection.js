var Backbone = require('backbone');

var Student = require('./../models/Student');

module.exports = Backbone.Collection.extend({
	model: Student,

  	initialize: function(){

    	this.on('add',function(){
    		console.log('se ha agregado aalgo a la collection');
    	});

    	this.on('change',function(student){
    		console.log('se ha realizado un cambio en '+student.name);
    	});

	},

});