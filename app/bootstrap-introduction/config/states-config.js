define(['angular', 'THREE', 'jquery',
	'../controllers/homeStateController',
	
	
	'text!../views/home-state-view.html',
	'text!../views/01-basic-grid-system-view.html',
	'text!../views/02-basic-typogrpahy.html',
	'text!../views/03-basic-lists.html',
	'text!../views/04-basic-table-style.html'
	

], function(angular, THREE, jquery,
	homeStateController,
	homeStateView,
	_01BasicGridSystemView,
	_02BasicTypographyView,
	_03BasiclistsView,
	_04BasicTableStyleView
){
	'use strict';
	const homeState = {
		name: 'bootstrap-introduction',
		url: '/bootstrap-introduction',
		template: homeStateView,
		controller: homeStateController
	};
	let states = [
		homeState,
		{
			name: '01-basic-grid-system',
			parent: homeState,
			url: '/01-basic-grid-system',
			template: _01BasicGridSystemView
		},
		{
			name: '02-basic-typography',
			parent: homeState,
			url: '/02-basic-typography',
			template: _02BasicTypographyView
		},
		{
			name: '03-basic-lists',
			parent: homeState,
			url: '/03-basic-lists',
			template: _03BasiclistsView
		},
		{
			name: '04-basic-table',
			parent: homeState,
			url: '04-basic-table',
			template: _04BasicTableStyleView
		}
	];
	return states;
});