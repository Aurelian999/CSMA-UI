import React, {Component } from "react";
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

class Termeni extends Component
{
    render() {
        return (
            <div>
            <NavigationMenu />
            <Container>
                <div>
                    <h1>Termeni si conditii</h1>
                    <p>Prin utilizarea site-ului sunteti de acord cu termenii si conditiile prezcizate mai jos:</p>

                </div>
                
            </Container>
            <Footer/>
            </div>
        );
    }
}

export default Termeni;