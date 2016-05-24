'use strict';

let firebase = require('firebase');
let os = require('os');

firebase.initializeApp({
	databaseURL: 'https://test-81f19.firebaseio.com/',
	serviceAccount: '.credentials'
});

let db = firebase.database();
let ref = db.ref('/app-backend');
ref.set({
	pid: process.pid,
	host: os.hostname(),
	timestamp: (new Date()).toISOString(),
	title: 'Hello World!'
});


