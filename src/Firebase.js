import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';

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

// Log Out Function
export function logout() {
	signOut(auth);
}

// Registration Function
export function signup(email, password) {
	return createUserWithEmailAndPassword(auth, email, password);
}

// Log In Function

export function login(email, password) {
	return signInWithEmailAndPassword(auth, email, password);
}

// Custom Hook - Track Signed In User
export function useAuth() {
	const [currentUser, setCurrentUser] = useState();
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
		return unsub;
	}, []);
	return currentUser;
}
