var $ = require('jquery');
var Backbone = require('backbone');
var slick = require('slick-carousel');

Backbone.$ = $;

var template = require('../templates/Gallery.hbs');

var Student = require('../models/Student');
var Pic = require('../models/Pic');
var PicCollection = require('../collections/PicCollection');
var StudentCollection = require('../collections/StudentCollection');


module.exports = Backbone.View.extend({
	el: '#gallery',
	myPics : null,

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

		myPics = new PicCollection([p1,p2,p3,p4]);

	    this.render();
	},

	render: function(){

		var content = { myPics: myPics.toJSON() };

		this.$el.html( template(content) );

		$(document).ready(function(){
		  $('.my-carousel').slick({
  			autoplay: true,
  			autoplaySpeed: 2500
		  });
		});
						
	}

});