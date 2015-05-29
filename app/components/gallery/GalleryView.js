//Require libraries
import Backbone from 'backbone';
import $ from 'jquery';
import slick from 'slick-carousel';

//template
import template from './GalleryTemplate.hbs';

//Require components
import Pic from './Pic';
import GalleryList from './GalleryList';


module.exports = Backbone.View.extend({

	el: '#gallery',

	initialize: function(){
	    
	    var p1 = new Pic();
	    p1.set('title','#chilehack');
	    p1.set('description','Sunrise in chilehack, pretending to still coding');
	    p1.set('url','img/pics/chilehack_morning.jpg');

	    var p2 = new Pic();
	    p2.set('title','#eventoz');
	    p2.set('description','First place in social app category');
	    p2.set('url','img/pics/chilehack_winners.jpg');

	    var p3 = new Pic();
	    p3.set('title','#pitch');
	    p3.set('description','Answering questions after the pitch of eventoz');
	    p3.set('url','img/pics/chilehack_pitch.jpg');

	    var p4 = new Pic();
	    p4.set('title','#swvalpo');
	    p4.set('description','First place in startup weekend valpo with SkillSwap');
	    p4.set('url','img/pics/swvalpo_winners.jpg');

		this.myPics = new GalleryList([p1,p2,p3,p4]);

	    this.render();
	},

	render: function(){

		var content = { myPics: this.myPics.toJSON() };

		this.$el.html( template(content) );

		$(document).ready(function(){
		  $('.my-carousel').slick({
  			autoplay: true,
  			autoplaySpeed: 2500
		  });
		});
						
	}

});