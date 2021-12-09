import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Button } from 'react-materialize';
import { signup, useAuth } from './Firebase';

import HomePage from './Components/HomePage/HomePage';

function App() {
	const currentUser = useAuth();

	const [RegistrationSuccess, setRegistrationSuccess] = useState('');
	const [UserEmail, setUserEmail] = useState();

	// Prevents Spam Sign Ups / Sign Ins
	const [Loading, setLoading] = useState(false);

	const emailRef = useRef();
	const passwordRef = useRef();

	// Registers New Users
	async function handleSignUp() {
		setLoading(true);
		try {
			await signup(emailRef.current.value, passwordRef.current.value);
			console.log('New User Registration');
			setRegistrationSuccess(
				<p className="RegistraionSuccess">Registration Successful</p>
			);
			//Temporary
			setUserEmail(currentUser?.email);

			setTimeout(() => {
				setRegistrationSuccess('');
			}, 3000);
		} catch (error) {
			alert(error);
		}
		setLoading(false);
	}

	// Sign In Component
	function SignInComponent() {
		return (
			<div className="SignInComponent">
				<h1 className="SignInLaber">Welcome Back</h1>
				{UserEmail}
				{RegistrationSuccess}
				<input
					type="email"
					className="EmailInput"
					placeholder="Email"
					ref={emailRef}
				/>
				<input
					type="password"
					className="PasswordInput"
					placeholder="Password"
					ref={passwordRef}
				/>

				<span>
					<Button
						node="a"
						small
						waves="light"
						onClick={handleSignUp}
						disabled={Loading || currentUser}
					>
						Register
					</Button>
					<Button
						node="a"
						small
						waves="light"
						// onClick={handleLogin}
						disabled={Loading}
					>
						Sign In
					</Button>
				</span>
			</div>
		);
	}

	// Temporary Sign Out Button
	function LogOutComponent() {
		return (
			<Button node="a" small waves="light" className="SignOutButton">
				Sign Out
			</Button>
		);
	}

	return (
		<div className="App">
			<SignInComponent />
			<LogOutComponent />
		</div>
	);
}

export default App;
