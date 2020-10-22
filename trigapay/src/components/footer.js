import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { Link, BrowserRouter as Router, } from 'react-router-dom'
import '../assets/css/footer.css'
 

function Footer(){
	return(
		<Container fluid className="footer">
			<Row>
				<Col md={4} className="col_one">
					<h2>SindiPay</h2>
				</Col>
				<Col md={4} className="col_two">
					<h3> Quick Links</h3>
					<Router>
						<div><Link to="">Home</Link></div>
						<div><Link to="">How It Works</Link></div>
						<div><Link to="">About Us</Link></div>
						<div><Link to="">News</Link></div>
						<div><Link to="">Contact Us</Link></div>
						
						
						
					</Router>
				</Col>
				<Col md={4} className="col_three">
					<p>
						Es un hecho establecido hace demasiado tiempo que un lector se 
						distraerá con el contenido del texto de un sitio mientras que mira su diseño. 
						El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, 
						al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". 
						Estos textos hacen parecerlo un español que se puede leer.
					</p>
				</Col>
			</Row>
		</Container>
	);

}

export default Footer;