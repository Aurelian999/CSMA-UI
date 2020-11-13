import React, {Component } from "react";
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

// import 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';

class Oferte extends Component
{
    render() {
        return (
            <div>
            <NavigationMenu />
            <Container>
                <div>
                    <h1>Oferte</h1>
                    <h2>Profita de ofertele noastre!</h2>

                    <p>Fii la curent cu ultimele oferte urmarind pagina de facebook <a href="https://www.facebook.com/bodychoice.cluj/">Body Choice</a>!</p>

                    <h3>Oferta lunii Martie</h3>
                    <p>Ai 30% reducere la toate abonamentele facute intre 20.02 - 15.03.2020</p>


                </div>
                
            </Container>
            <Footer/>
            </div>
        );
    }
}

export default Oferte;