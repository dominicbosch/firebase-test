'use strict';

let Firebase = require('firebase');

let db = new Firebase('https://analyze-watson.firebaseio.com/');

db.set({
	title: 'Hello World!',
	author: 'Firebase',
	location: {
		city: 'San Francisco',
		state: 'California',
		zip: 94103
	}
});


