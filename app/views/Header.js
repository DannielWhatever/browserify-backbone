var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

Backbone.$ = $;


module.exports = Backbone.View.extend({
	el: '#header',
	aboutMe: null,

	initialize: function(){
	    
		aboutMe = {
			name: 'Daniel Gutiérrez',
			title: 'Web Developer',
			social: [
						{
							link:'https://github.com/DannielWhatever',
							iconclass:'fa fa-github'
						},
						{
							link:'https://www.linkedin.com/profile/view?id=216836458',
							iconclass:'fa fa-linkedin-square'
						}
					]
		};

	    this.render();
	},

	render: function(){
		var title = aboutMe.name + ' | ' + aboutMe.title;
		var socialIcons = '';
		_.each(aboutMe.social,function(i){
			socialIcons += '<li><a href="'+i.link+'"><i class="'+i.iconclass+'"></i></a></li>';
		});

		var vHtml = '<div class="row">'+
					'	<div class="col-xs-12">'+
					'		<nav>'+
					'			<div class="nav-wrapper light-green lighten-2">'+
					'	     		<a href="#!" class="brand-logo">'+title+'</a>'+
					'	     		<ul class="right hide-on-med-and-down">'+
					socialIcons+
					'	       			<li><a href="mobile.html"><i class="mdi-navigation-more-vert"></i></a></li>'+
					'     			</ul>'+
					'   		</div>'+
					'		</nav>'+
					'   </div>'+
					'</div>';
		this.$el.html(vHtml);

						
	}

});