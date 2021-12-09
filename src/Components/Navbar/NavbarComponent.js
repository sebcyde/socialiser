import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import './NavbarComponent.css';

function NavbarComponent() {
	return (
		<div>
			<Navbar
				className="NavBar"
				alignLinks="left"
				brand={
					<a className="brand-logo right" href="#">
						Logo
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
				<NavItem onClick={function noRefCheck() {}}>Getting started</NavItem>
				<NavItem href="components.html">Components</NavItem>
			</Navbar>
		</div>
	);
}

export default NavbarComponent;
