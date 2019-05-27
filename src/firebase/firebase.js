import app from 'firebase/app';

require('firebase/firestore');

const firebaseConfig = {
	apiKey: 'AIzaSyBXNbCabMEcs1U0jxHUEvRVkQ5oTJYQQVA',
	authDomain: 'trains-e1661.firebaseapp.com',
	databaseURL: 'https://trains-e1661.firebaseio.com',
	projectId: 'trains-e1661',
	storageBucket: 'trains-e1661.appspot.com',
	messagingSenderId: '698491056889',
	appId: '1:698491056889:web:03b1b697c90ceecb',
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);

		this.db = app.firestore();
		this.watchers = this.db.collection('watchers');
	}
}

export default Firebase;
