const ref = db.ref('/users');

var User = null;

auth.onAuthStateChanged(function(user) {
	console.log(user);
	if (user) {
		User = user;
	}
});

function accountIsChild() {
	ref.child(User.uid).push({
	accountType: 'child',
	chores: []
	}).then(() => {
		window.location = './Child-page.html';		
	})
}


function accountIsAdmin() {
	ref.child(User.uid).push({
	accountType: 'admin',
	children: [],
	chores: 'bla'
	}).then(() => {
		window.location = './Admin-page.html';
	})
}