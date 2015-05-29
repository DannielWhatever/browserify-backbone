
import Backbone from 'backbone';

import Tweet from './Tweet.js';
import TweetList from './TweetList.js';
import TweetView from './TweetView.js';

module.exports = Backbone.View.extend({
	
	el: '#tweets',

	initialize: function(){
		this.collection = new TweetList();
	    this.collection.on('add', this.addOne, this);
	    this.addTestTweets();
	},

	render: function(){
		this.collection.forEach(this.addOne, this);
	},

	addOne: function(tweet){
		var tweetView = new TweetView({model: tweet});
		this.$el.append(tweetView.render().el);
	},

	addTestTweets : function(){
		//Agrego un par de tweets a la coleccion
		var t1 = new Tweet();
		t1.set({user: 'DannielWhatever',text: 'hola backbone :)'});
		
		var t2 = new Tweet();
		t2.set({user: 'DannielWhatever',text: 'saddjk askjd :B'});

		this.collection.add(t1);
		this.collection.add(t2);
	}

});