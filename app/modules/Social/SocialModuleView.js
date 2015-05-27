
import Backbone from 'backbone';

import template from './SocialTemplate.hbs';

import Tweet from './../../components/tweets/Tweet';
import TweetList from './../../components/tweets/TweetList';
import TweetListView from './../../components/tweets/TweetListView'; 


module.exports = Backbone.View.extend({
	el: '#module',
	aboutMe: null,

	initialize: function(){
	    
	    this.render();
	},

	render: function(){
		
		this.$el.html( template({}) );

		var tweetList = new TweetList();
		new TweetListView({collection: tweetList});


		//Agrego un par de tweets a la coleccion
		var t1 = new Tweet();
		t1.set({user: 'DannielWhatever',text: 'hola backbone :)'});
		
		var t2 = new Tweet();
		t2.set({user: 'DannielWhatever',text: 'saddjk askjd :B'});

		tweetList.add(t1);
		tweetList.add(t2);
		
						
	}

});