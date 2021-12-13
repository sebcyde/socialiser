import React from 'react';
import { Navbar, NavItem, Icon, Switch } from 'react-materialize';
import './NavbarComponent.css';

function NavbarComponent() {
	return (
		<div className="NavBarContainer">
			<Navbar
				className="NavBar"
				alignLinks="left"
				brand={
					<a className="brand-logo right" href="#">
						Socialiser
					</a>
				}
				id="mobile-nav"
				menuIcon={<Icon>menu</Icon>}
				options={{
					draggable: true,
					edge: 'left',
					inDuration: 250,
					onCloseEnd: null,
					onCloseStart: null,
					onOpenEnd: null,
					onOpenStart: null,
					outDuration: 200,
					preventScrolling: true,
				}}
			>
				<NavItem onClick={function noRefCheck() {}}>Home</NavItem>
				<NavItem href="components.html">Friends</NavItem>
				<NavItem href="components.html">My Profile</NavItem>

				<Switch
					className="LightSwitch"
					id="Switch-20"
					offLabel={<i class="material-icons">wb_sunny</i>}
					onChange={function noRefCheck() {}}
					onLabel={<i class="material-icons">brightness_3</i>}
				/>
			</Navbar>
		</div>
	);
}

export default NavbarComponent;
