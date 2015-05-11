var $ = require('jquery');
var Backbone = require('backbone');
var slick = require('slick-carousel');

Backbone.$ = $;


var Student = require('../models/Student');
var Pic = require('../models/Pic');
var PicCollection = require('../collections/PicCollection');
var StudentCollection = require('../collections/StudentCollection');


module.exports = Backbone.View.extend({
	el: '#gallery',
	myPics : null,

	initialize: function(){
	    
	    var p1 = new Pic();
	    p1.set('title','p1');

	    var p2 = new Pic();
	    p2.set('title','p2');

	    var p3 = new Pic();
	    p3.set('title','p3');

		myPics = new PicCollection([p1,p2,p3]);

	    this.render();
	},

	render: function(){

		var vHtml = '<div class="my-carousel">';
		myPics.each(function(pic,idx) {
			vHtml +=  '<div class="card">'+
			          '  <div class="card-image">'+
			          '    <img src="'+pic.get('url')+'">'+
			          '    <span class="card-title">'+pic.get('title')+'</span>'+
			          '  </div>'+
			          '  <div class="card-content">'+
			          '    <p>'+pic.get('description')+'</p>'+
			          '  </div>'+
			          //'  <div class="card-action"><a href="#">This is a link</a></div>'+
			          '</div>';
		});
		vHtml += '</div>';

		this.$el.html(vHtml);

		$(document).ready(function(){
		  $('.my-carousel').slick({
  			autoplay: true,
  			autoplaySpeed: 2000
		  });
		});
						
	},

	events: {
		'click #tbtn': 'eventoX'
	},

	eventoX: function(){
		console.log('eVento');
	}
});