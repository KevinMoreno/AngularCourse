(function(){
	
	var gem = {
		name: 'Azurite',
		price: '2.95',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		canPurchase: false,
		soldOut: true
	};

	var gems = [
		{
		name: 'Azurite',
		price: '2.95',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		canPurchase: true,
		soldOut: true,
		images: [
			{id:0, url:'img/gem-01.gif'},
			{id:1, url:'img/gem-02.gif'},
			{id:2, url:'img/gem-03.gif'}
			]
		},
		{
		name: 'Bloodstone',
		price: '5.95',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		canPurchase: true,
		soldOut: true,
		images: [
			{id:0, url:'img/gem-04.gif'},
			{id:1, url:'img/gem-05.gif'},
			{id:2, url:'img/gem-06.gif'}
			]
		},
		{
		name: 'Zircon',
		price: '3.95',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		canPurchase: true,
		soldOut: true,
		images: [
			{id:0, url:'img/gem-07.gif'},
			{id:1, url:'img/gem-08.gif'},
			{id:2, url:'img/gem-09.gif'}
		]
		},	
	];

	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

})();

