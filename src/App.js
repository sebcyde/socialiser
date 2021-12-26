import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'react-materialize';
import { signup, useAuth, logout, login } from './Firebase';
import HomePage from './Components/HomePage/HomePage';
import Loadscreen from './Components/LoadScreen/Loadscreen';

function App() {
	AOS.init();
	const currentUser = useAuth();
	const [SignedOut, setSignedOut] = useState('');
	const [RegistrationSuccess, setRegistrationSuccess] = useState('');
	const [LoginSuccess, setLoginSuccess] = useState('');
	const [UserEmail, setUserEmail] = useState('');
	const [PageSwitcher, setPageSwitcher] = useState(<SignInComponent />);

	// Prevents Spam Sign Ups / Sign Ins
	const [Loading, setLoading] = useState(false);

	const emailRef = useRef();
	const passwordRef = useRef();

	// Log In Existing Users
	async function handleLogin() {
		setLoading(true);
		try {
			await login(emailRef.current.value, passwordRef.current.value);
			console.log('Existing User Logged In');
			setPageSwitcher(<Loadscreen />);
			setTimeout(() => {
				setPageSwitcher(<HomePage />);
			}, 2000);
		} catch (error) {
			alert(error);
		}
		setLoading(false);
	}

	// Registers New Users
	async function handleSignUp() {
		setLoading(true);
		try {
			await signup(emailRef.current.value, passwordRef.current.value);
			console.log('New User Registration');
			setRegistrationSuccess(
				<p className="RegistrationSuccess">Registration Successful</p>
			);
			//Temporary
			setUserEmail(currentUser?.email);
			console.log(currentUser);

			setTimeout(() => {
				setRegistrationSuccess('');
			}, 3000);
			await RegistrationSuccess;
			setTimeout(() => {
				setPageSwitcher(<HomePage />);
			}, 3000);
		} catch (error) {
			alert(error);
		}
		setLoading(false);
	}

	// Log Out Function
	async function handleLogOut() {
		setLoading(true);
		try {
			await logout();
			console.log('User Signed Out');
			setSignedOut(<p className="SignOutSuccess">Sign Out Successful</p>);
			setTimeout(() => {
				setSignedOut('');
			}, 3000);
			await SignedOut;
			setTimeout(() => {
				setPageSwitcher(<SignInComponent />);
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
				<h1 className="SignInLaber">Welcome</h1>

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
						onClick={handleLogin}
						disabled={Loading || currentUser}
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
			<Button
				node="a"
				small
				waves="light"
				className="SignOutButton"
				onClick={handleLogOut}
				disabled={Loading || !currentUser}
			>
				Sign Out
			</Button>
		);
	}

	return <div className="App">{PageSwitcher}</div>;
}

export default App;
