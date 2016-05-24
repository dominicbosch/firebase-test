'use strict';

let firebase = require('firebase');
let os = require('os');

firebase.initializeApp({
	databaseURL: 'https://analyze-watson.firebaseio.com',
	serviceAccount: '.credentials'
});

let db = firebase.database();
let ref = db.ref('/');
ref.set({
	pid: process.pid,
	host: os.hostname(),
	timestamp: (new Date()).toISOString(),
	title: 'Hello World!'
});


