
import Backbone from 'backbone';

import template from './HomeTemplate.hbs';


import Post from './../../components/posts/Post';
import PostList from './../../components/posts/PostList';
import PostListView from './../../components/posts/PostListView'; 


module.exports = Backbone.View.extend({
	el: '#module',
	aboutMe: null,

	initialize: function(){
	    
	    this.render();
	},

	render: function(){
		this.$el.html( template({}) );

		var postList = new PostList();
		postList.fetch(); //get from API

		new PostListView({collection: postList});
						
	}

});