import React, {Component } from "react";
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

class Gdpr extends Component
{
    render() {
        return (
            <div>
            <NavigationMenu />
            <Container>
                <div>
                    <h1>Protectia datelor - GDPR</h1>
                    <p>Protectia datelor:</p>

                </div>
                
            </Container>
            <Footer/>
            </div>
        );
    }
}

export default Gdpr;