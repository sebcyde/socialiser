import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from 'react-materialize';

import HomePage from './Components/HomePage/HomePage';

function App() {
	function SignInComponent() {
		return (
			<div className="SignInComponent">
				<h1 className="SignInLaber">Welcome Back</h1>
				<input type="email" className="EmailInput" placeholder="Email" />
				<input
					type="password"
					className="PasswordInput"
					placeholder="Password"
				/>
				<span>
					<Button node="a" small waves="light">
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
