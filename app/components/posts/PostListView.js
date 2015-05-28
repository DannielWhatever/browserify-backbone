
import Backbone from 'backbone';
import $ from 'jquery';

import template from './PostListTemplate.hbs';
import templateModals from './PostModalsTemplate.hbs';

import Post from './Post.js';
import PostList from './PostList';
import PostView from './PostView.js';


module.exports = Backbone.View.extend({
	el: '#posts',

	initialize: function(){
	    this.collection.on('add', this.addOne, this);
	    this.render();
	},

	events: {
		'click #posts_btn_add' : 'openModalAdd',
		'click #posts_add_btn_close' : 'closeModalAdd',
		'click #posts_add_btn_send': 'addNewPost'
	},

	render: function(){
		let tpl = templateModals() + template(); //concat templates
		this.$el.html( tpl );
		this.collection.fetch(); //get data from api
		this.collection.forEach(this.addOne, this);
	},

	addOne: function(tweet){
		let postView = new PostView({model: tweet});
		this.$el.find('#posts_container').append(postView.render().el);
	},

	openModalAdd: () => {
		$('#posts_add').show();
	},

	closeModalAdd: () => {
		$('#posts_add').hide();
	},

	addNewPost: function(){
		let newPost = new Post({
			title: $('#posts_add_title').val(),
			author: $('#posts_add_author').val(),
			content: $('#posts_add_content').val()
		});
		newPost.save(); //post to api
		this.render();
	}

});