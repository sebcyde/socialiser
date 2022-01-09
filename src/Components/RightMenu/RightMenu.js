import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';
import './RightMenu.css';

function RightMenu() {
	return (
		<div className="RightMenuContainer">
			<div
				className="Rightsection"
				data-aos="fade-down"
				data-aos-easing="ease-in"
				data-aos-duration="600"
				data-aos-offset="20"
			>
				<ul className="NavBar">
					<a>
						<li>Friends</li>
					</a>
					<a>
						<li>Messenger</li>
					</a>
					<a>
						<li>About</li>
					</a>
				</ul>
			</div>
		</div>
	);
}

export default RightMenu;
