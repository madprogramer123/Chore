var app = firebase.initializeApp({
	apiKey: 'AIzaSyCzNQJMPSluc8bmxmxlISBgWv74u50cLOI',
	authDomain: 'localhost',
	databaseURL:"https://chore-manager-26ef4.firebaseio.com/"
});
var auth = app.auth();
var db = app.database();