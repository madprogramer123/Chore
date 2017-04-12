var app = firebase.initializeApp({
	apiKey: 'AIzaSyCzNQJMPSluc8bmxmxlISBgWv74u50cLOI',
	authDomain: 'localhost'
});

var auth = app.auth();


function signup(){
	console.log("hello");
	var email=document.getElementById("signupemail")
		var password=document.getElementById("signuppassword")
	auth.createUserWithEmailAndPassword(email.value, password.value)
	.then(function(data){
		console.log(data)
		alert("Your account has been created")
	})
	.catch(function(error) {
	console.log(error)
	});
	
}

