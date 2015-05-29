//Require libraries
import Backbone from 'backbone';

//module Template
import template from './SocialTemplate.hbs';

//Require components
import GalleryView from './../../components/gallery/GalleryView';
import TweetListView from './../../components/tweets/TweetListView'; 


module.exports = Backbone.View.extend({
	el: '#module',
	Components: {},

	initialize: function(){
	},

	start: function(){
		this.render();
	},

	render: function(){
		this.$el.html( template({}) );
		this.loadComponents();
	},

	loadComponents: function(){
		this.Components.TweetList = new TweetListView();
		//this.Components.Gallery = new GalleryView();
	}


});