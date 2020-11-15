import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';

function Gdpr(): JSX.Element {
  return (
    <div>
      <NavigationMenu />
      <Container>
        <div>
          <h1>Protectia datelor - GDPR</h1>
          <p>Protectia datelor:</p>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Gdpr;
