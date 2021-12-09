import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAtIbMqyobJIFg1wecZshNX_z8N8Cr3M-I',
	authDomain: 'socialiser-463ca.firebaseapp.com',
	projectId: 'socialiser-463ca',
	storageBucket: 'socialiser-463ca.appspot.com',
	messagingSenderId: '547540031445',
	appId: '1:547540031445:web:260d4e288a3ffaec910f5c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
	return createUserWithEmailAndPassword(auth, email, password);
}
