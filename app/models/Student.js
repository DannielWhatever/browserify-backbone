var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  	initialize: function(){
    	console.log('se ha creado una nueva instancia c:');

    	this.on('change',function(){
    		console.log('onchange student', this.toJSON());
    	});

	},
	defaults : {
		edad: 24
	},
	validate : function(attr){ //Validate se ocupa contra el método save
		if(!attr.promedio){
			return 'Debe tener un promedio';
		}
	}
});	

