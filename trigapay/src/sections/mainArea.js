import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import '../assets/css/mainarea.css'


function Main(){
	return (
		<Container fluid>
			<Row className="main">
				<Col>
					<h1>SindiPay</h1>
				</Col>
			</Row>
		</Container>
		);
}

export default Main;