//Require libraries
import Backbone from 'backbone';
import $ from 'jquery';
//import materialize from 'materialize-css';

Backbone.$ = $;

//Require components
import AppView from './application/AppView';


//Say hello
console.log('%c Hello stranger! ', 'background: #222; color: #bada50');

//Main App
let App = new AppView();
App.start();
