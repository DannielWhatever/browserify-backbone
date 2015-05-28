
import Backbone from 'backbone';

import template from './HomeTemplate.hbs';

import PostList from './../../components/posts/PostList';
import PostListView from './../../components/posts/PostListView'; 


module.exports = Backbone.View.extend({
	el: '#module',

	initialize: function(){
	    
	    this.render();
	},

	render: function(){
		this.$el.html( template({}) );

		var postList = new PostList();
		new PostListView({collection: postList});
						
	}

});