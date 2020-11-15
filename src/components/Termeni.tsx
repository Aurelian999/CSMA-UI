import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';

function Termeni(): JSX.Element {
  return (
    <div>
      <NavigationMenu />
      <Container>
        <div>
          <h1>Termeni si conditii</h1>
          <p>
            Prin utilizarea site-ului sunteti de acord cu termenii si conditiile
            prezcizate mai jos:
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Termeni;
