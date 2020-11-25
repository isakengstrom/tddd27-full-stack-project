import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styled from 'styled-components';

class AppFooter extends Component {
	render(){
		return (
            <FooterContainer>
                <footer className="mt-5">
                    <div className="footer-middle">
                        <Container>
                            <Row>
                                <Col md={4} sm={6}>
                                    <h5>Contact</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="mailto: bioengstrom@gmail.com">Email</a></li>
                                        <li><a href="https://www.linkedin.com/in/bioengstrom/">LinkedIn</a></li>
                                        <li><a href="https://github.com/bioengstrom">Github</a></li>
                                    </ul>
                                </Col>
                                <Col md={5} sm={6}>
                                    <h5>About</h5>
                                    <ul className="list-unstyled">
                                        <li>This website is a project made in the course <a href="https://www.ida.liu.se/~TDDD27/">Advanced Web Programming (TDDD27)</a>, at LiU.</li>
                                    </ul>
                                </Col> 
                            </Row>
                            <div className="footer-bottom">
                                <p className="text-xs-center">
                                    &copy; {new Date().getFullYear()} Isak Engström  
                                </p>
                            </div>
                        </Container>
                    </div>
                </footer>
            </FooterContainer>
		);
	}
}

export default AppFooter;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

a {
    color: var(--mainGrey);
}

a:hover {
    text-decoration: none;
    color: var(--mainLightGrey);
}

.footer-bottom {
    padding-top: 1rem;
    padding-bottom: 2rem;
}

`;