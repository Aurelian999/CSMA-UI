import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row } from 'react-bootstrap';
import Footer from './Footer';
import NavigationMenu from './NavigationMenu';

function Contact(): JSX.Element {
  return (
    <div>
      <NavigationMenu />
      <Container>
        <div>
          <h1>Contact</h1>
          <br />
          <p>
            Ne puteți contacta telefonic la numărul:
            {' '}
            <a href="tel:0740 428 881">
              <FontAwesomeIcon icon={faPhoneAlt} />
              {' '}
              0740 428 881
            </a>
          </p>
          <p>
            Pe email:
            {' '}
            <a href="mailto:contact@body-choice.ro">contact@body-choice.ro</a>
          </p>
          <p>
            Pe WhatsApp:
            {' '}
            <a href="https://wa.me/40740428881">0740 428 881</a>
          </p>
          <p>
            Pe Messenger:
            {' '}
            <a href="https://m.me/bodychoice.cluj">@bodychoice.cluj</a>
          </p>
          <address>
            Strada Ialomiței nr. 13, Cluj-Napoca, Cluj (în incinta Bliss Beauty
            Studio)
          </address>
          <Row>
            <iframe
              title="adresa"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d683.0295513925834!2d23.61853496011842!3d46.78227511407978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c100335db2f%3A0x7b189e0e89742ddd!2sStrada%20Ialomi%C8%9Bei%2013%2C%20Cluj-Napoca%20400000!5e0!3m2!1sen!2sro!4v1582135026534!5m2!1sen!2sro"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            />
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
