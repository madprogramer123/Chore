var ref = db.ref('/test/');
ref.push({text:"hello"})
auth.onAuthStateChanged(function(user) {
	if (user) {
		var uid = user.uid
		db.ref('/users').child(uid).push({
					children:["Josh"]
				})
	}
});
