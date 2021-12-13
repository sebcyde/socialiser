import React from 'react';
import { Col, Preloader, Row } from 'react-materialize';
import './Loadscreen.css';

function Loadscreen() {
	return (
		<div className="LoadScreenContainer">
			<Row>
				<Col s={4}>
					<Preloader active color="blue" flashing={false} size="big" />
					<p>Loading</p>
				</Col>
			</Row>
		</div>
	);
}

export default Loadscreen;
