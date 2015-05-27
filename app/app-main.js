//Require libraries

import Backbone from 'backbone';
import $ from 'jquery';

Backbone.$ = $;

//Require components

import AppView from './application/AppView';
import Router from './Router';

import HeaderView from './components/header/HeaderView';
import MenuView from './components/menu/MenuView';


//Main App
$(() => {

  	new AppView();
	new HeaderView();
	new MenuView();
	new Router();

	Backbone.history.start();	



});

