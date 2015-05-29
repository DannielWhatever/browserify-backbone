//Require libraries
import Backbone from 'backbone';

module.exports = Backbone.Router.extend({

	Modules: {},

	initialize:function(options){
		this.Modules = options.modules;
		Backbone.history.start();	
	},

	routes:{

		'home': 'moduleHome',
		'social': 'moduleSocial',
		'' : 'moduleHome'
		
	},

	moduleHome: function(){
		this.Modules.Home.start();
	},

	moduleSocial: function(){
		this.Modules.Social.start();
	}

});