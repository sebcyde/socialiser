import React from 'react';
import './NavbarComponent.css';
import { Navbar, Icon, NavItem } from 'react-materialize';

function NavbarComponent() {
	return (
		<>
			<div className="section">
				<Navbar
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
					<NavItem onClick={function noRefCheck() {}}>Getting started</NavItem>
					<NavItem href="components.html">Components</NavItem>
				</Navbar>
			</div>
			<div className="NavBarContainer">
				<ul className="NavBar">
					<a>
						<li>Home</li>
					</a>
					<a>
						<li>Home</li>
					</a>
					<a>
						<li>Home</li>
					</a>
					<a>
						<li>Home</li>
					</a>
					<a>
						<li>Home</li>
					</a>
					<a>
						<li>Home</li>
					</a>
				</ul>
			</div>
		</>
	);
}

export default NavbarComponent;
