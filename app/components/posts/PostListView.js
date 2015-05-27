
import Backbone from 'backbone';

import TweetView from './PostView.js';

module.exports = Backbone.View.extend({
	el: '#posts',

	initialize: function(){
	    this.collection.on('add', this.addOne, this);
	},

	render: function(){
		this.collection.forEach(this.addOne, this);
	},

	addOne: function(tweet){
		var tweetView = new TweetView({model: tweet});
		this.$el.append(tweetView.render().el);
	}

});