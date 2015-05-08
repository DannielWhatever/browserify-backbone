var Backbone = require('backbone');
var $ = require('jquery');

var Student = require('./models/Student');

var StudentCollection = require('./collections/StudentCollection');

Backbone.$ = $;

module.exports = Backbone.View.extend({
	el: '#title',

	initialize: function(){
	    console.log('wuuut sap')

	    var a = new Student({name:'Jonhy',promedio:9});
	    if(a.isValid()){
		    console.log(a.toJSON());
		    console.log(a.get('edad'));
		    console.log(a.set('edad',90));
		}

		var students = new StudentCollection([a]);
		students.add(new Student({name:'Daniel'}));

		//students.get(1).set('edad',24);


	    this.render();
	},

	render: function(){
		this.$el.html('<p>wooooooooooooooo yeah</p><button id="tbtn">asdas</button>');
		//$('body').prepend(this.$el);
	},

	events: {
		'click #tbtn': 'eventoX'
	},

	eventoX: function(){
		console.log('eVento');
	}
});