
function signup(){
	console.log("hello");
	var email=document.getElementById("signupemail")
		var password=document.getElementById("signuppassword")
	auth.createUserWithEmailAndPassword(email.value, password.value)
	.then(function(data){
		console.log(data)
		alert("Your account has been created")
		window.location = './choose-account.html';
	})
	.catch(function(error) {
	console.log(error)
	});
	
}

auth.onAuthStateChanged(function(user) {
	console.log(user)

});

function login(){
	var email=document.getElementById("loginemail")
		var password=document.getElementById("loginpassword")
	auth.signInWithEmailAndPassword(email.value, password.value).then(function(){
		window.location = './chorepage.html';
	})
	.catch(function(error) {
		console.log(error)
	})
}

