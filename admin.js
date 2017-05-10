var ref = db.ref('/users');

auth.onAuthStateChanged(function(user) {
	if (user) {
		ref.child(user.uid).on('child_added', function(stuff) {document.getElementById('chorediv').textContent = stuff.val().chores});
		document.getElementsByTagName('h1')[0].textContent = 'your parental code is ' + user.uid;
	} else {
		console.log("no user");
	}
});