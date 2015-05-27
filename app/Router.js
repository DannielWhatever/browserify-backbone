
import Backbone from 'backbone';

import HomeModuleView from './modules/Home/HomeModuleView';
import SocialModuleView from './modules/Social/SocialModuleView';


module.exports = Backbone.Router.extend({

	routes:{

		'home': 'moduleHome',
		'social': 'moduleSocial',
		'' : 'moduleHome'
		
	},

	moduleHome: function(){
		new HomeModuleView();
	},

	moduleSocial: function(){
		new SocialModuleView();
	}

});