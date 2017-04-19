var app = firebase.initializeApp({
	apiKey: 'AIzaSyCzNQJMPSluc8bmxmxlISBgWv74u50cLOI',
	authDomain: 'localhost'
});

var auth = app.auth();

function signout(){
auth.signOut();
}

auth.onAuthStateChanged(function(user) {
	
	if (user) {
		console.log(user)
	} else {
		console.log("no user")
	}
});
