//Require libraries
import Backbone from 'backbone';

//module Template
import template from './HomeTemplate.hbs';

//Require components
import PostList from './../../components/posts/PostList';
import PostListView from './../../components/posts/PostListView'; 


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
		var postList = new PostList();
		this.Components.Posts = new PostListView({collection: postList});
	}

	



});