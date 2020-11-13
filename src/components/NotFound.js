import React, {Component } from "react";
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';
import {Container} from 'react-bootstrap';

class Oferte extends Component
{
    render() {
        // TODO redirect to homepage after 5 sec
        return (
            <div>
            <NavigationMenu />
            <Container>
                <div>
                    <h1>404</h1>
                    <h2>Pagina nu a fost gasita</h2>
                </div>
            </Container>
            <Footer/>
            </div>
        );
    }
}

export default Oferte;