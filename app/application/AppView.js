//Require libraries
import Backbone from 'backbone';

//app Template
import template from './AppTemplate.hbs';

//Require Router
import Router from './Router';

//Rqeuire modules
import HomeModuleView from './../modules/Home/HomeModuleView';
import SocialModuleView from './../modules/Social/SocialModuleView';

//Require components
import HeaderView from './../components/header/HeaderView';
import MenuView from './../components/menu/MenuView';

module.exports = Backbone.View.extend({

	el: '#app',
	Modules: {},
	Components: {},

	initialize: function(){
	    this.render();
	},

	render: function(){
		this.$el.html( template({}) );
	},

	start: function(){
		this.loadComponents();
		this.loadModules();
		this.Router = new Router({modules: this.Modules});
	},

	events:{
		'click a[data-internal]': (e)=>{
			e.preventDefault();
			Backbone.history.navigate(e.target.pathname,{trigger:true});
		}
  	},

	loadComponents: function(){
		this.Components.Header = new HeaderView();
		this.Components.Menu = new MenuView();
	},

	loadModules: function(){
		this.Modules.Home = new HomeModuleView();
		this.Modules.Social = new SocialModuleView();
	}


});