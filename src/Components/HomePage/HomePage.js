import React from 'react';
import NavbarComponent from '../Navbar/NavbarComponent';
import { Icon, Button } from 'react-materialize';
import './HomePage.css';
import RedditAPI from './Components/RedditAPI/RedditAPI';
import RightMenu from '../RightMenu/RightMenu';

function HomePage() {
	return (
		<div className="HomePageContainer">
			<NavbarComponent />
			<RedditAPI />
			<RightMenu />
			<div className="FloatingGrayButtons">
				<Button
					className="GrayButton"
					fab={{
						direction: 'left',
					}}
					floating
					large
					node="button"
				>
					<Button
						className="GrayButton"
						floating
						icon={<Icon>insert_chart</Icon>}
						node="button"
					/>
					<Button
						className="GrayButton"
						floating
						icon={<Icon>format_quote</Icon>}
						node="button"
					/>
					<Button
						className="GrayButton"
						floating
						icon={<Icon>publish</Icon>}
						node="button"
					/>
					<Button
						className="GrayButton"
						floating
						icon={<Icon>attach_file</Icon>}
						node="button"
					/>
				</Button>
			</div>
		</div>
	);
}

export default HomePage;
