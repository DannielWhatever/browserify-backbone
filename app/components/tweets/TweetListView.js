
import Backbone from 'backbone';

import TweetView from './TweetView.js';

module.exports = Backbone.View.extend({
	el: '#tweets',

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