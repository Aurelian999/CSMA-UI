import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';

function Oferte(): JSX.Element {
  return (
    <div>
      <NavigationMenu />
      <Container>
        <div>
          <h1>Oferte</h1>
          <h2>Profita de ofertele noastre!</h2>

          <p>
            Fii la curent cu ultimele oferte urmarind pagina de facebook
            {' '}
            <a href="https://www.facebook.com/bodychoice.cluj/">Body Choice</a>
            !
          </p>

          <h3>Oferta lunii Martie</h3>
          <p>
            Ai 30% reducere la toate abonamentele facute intre 20.02 -
            15.03.2020
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Oferte;
