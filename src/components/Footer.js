import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';
import messenger from './facebook-messenger.svg';

class Footer extends Component {

    render() {
        return (
                <footer className="footer mt-auto py-3">
                    <Container>
                        <Row>
                            <Col md={{ span: 3, offset: 1 }} sm={4} className="footer-col">
                                <aside>
                                    <h3>Orar</h3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="footer-workday" >Luni-Vineri</td>
                                                <td></td>
                                                <td>09:00 - 20:00</td>
                                            </tr>
                                            <tr>
                                                <td className="footer-workday" >Sâmbătă</td>
                                                <td></td>
                                                <td>09:00 - 13:00</td>
                                            </tr>
                                            <tr>
                                                <td className="footer-workday" >Duminică</td>
                                                <td></td>
                                                <td>închis</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </aside>
                            </Col>
                            <Col md={{ span: 3, offset: 1 }} sm={4} className="footer-col">
                                <h3>Link-uri</h3>
                                <p><a href="/gdpr">Protectia datelor</a></p>
                                <p><a href="/termeni-si-conditii">Termeni si conditii</a></p>
                            </Col>
                            <Col md={{ span: 3, offset: 1 }} sm={4} className="footer-col">
                                <h3>Contact</h3>
                                <p><a href="tel:0740 428 881"><FontAwesomeIcon icon={faPhoneAlt}/> 0740 428 881</a></p>
                                <div className="contact-social">
                                    <SocialIcon url="https://www.facebook.com/bodychoice.cluj/" style={{ height: 40, width: 40 }} />
                                    <SocialIcon url="https://wa.me/40740428881" network="whatsapp" style={{ height: 40, width: 40 }} />
                                    <SocialIcon url="mailto:contact@body-choice.ro" network="mailto" style={{ height: 40, width: 40 }} />
                                    <a href="https://m.me/bodychoice.cluj"><img alt="Contacteaza-ne pe messenger" src={messenger} style={{ height: 40, width: 40 }}></img></a>
                                </div>
                            </Col>
                        </Row>
                            <p className="text-center">Copyright 2020. All Rights Reserved by <a href="/">Body Choice</a></p>
                    </Container>
                </footer>
        );
    }
}

export default Footer;