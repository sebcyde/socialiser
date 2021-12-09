import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Button } from 'react-materialize';
import { signup } from './Firebase';

import HomePage from './Components/HomePage/HomePage';

function App() {
	const [RegistrationSuccess, setRegistrationSuccess] = useState('');

	const emailRef = useRef();
	const passwordRef = useRef();

	async function handleSignUp() {
		await signup(emailRef.current.value, passwordRef.current.value);
		console.log('New User Registration');
		setRegistrationSuccess(
			<p className="RegistraionSuccess">Registration Successful</p>
		);
		setTimeout(() => {
			setRegistrationSuccess('');
		}, 3000);
	}

	function SignInComponent() {
		return (
			<div className="SignInComponent">
				<h1 className="SignInLaber">Welcome Back</h1>
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
					<Button node="a" small waves="light" onClick={handleSignUp}>
						Register
					</Button>
					<Button node="a" small waves="light">
						Sign In
					</Button>
				</span>
			</div>
		);
	}

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
