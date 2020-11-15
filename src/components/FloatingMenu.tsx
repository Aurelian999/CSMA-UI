import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import {
  faPhoneAlt,
  faEnvelopeOpen,
  faComment,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookMessenger,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import FloatingMenuItem from './FloatingMenuItem';

function FloatingMenu(): JSX.Element {
  const [toggled, setToggled] = useState(false);

  function toggleMenu() {
    setToggled(!toggled);
  }

  function contactViaMail() {
    window.open('mailto:contact@body-choice.ro');
  }

  function contactViaWhatsApp() {
    window.open('https://wa.me/40740428881');
  }

  function contactViaMessenger() {
    window.open('https://m.me/bodychoice.cluj');
  }

  function contactViaPhone() {
    window.open('tel:0740428881');
  }

  const buttons: JSX.Element[] = [];
  let className = 'floating-menu';
  let icon = faComment;

  if (toggled) {
    className += ' open';
    icon = faTimesCircle;
    buttons.push(
        <FloatingMenuItem
          label="Sună acum"
          icon={faPhoneAlt}
          action={contactViaPhone}
        />,
    );
    buttons.push(
        <FloatingMenuItem
          label="WhatsApp"
          icon={faWhatsapp}
          action={contactViaWhatsApp}
        />,
    );
    buttons.push(
        <FloatingMenuItem
          label="Messenger"
          icon={faFacebookMessenger}
          action={contactViaMessenger}
        />,
    );
    buttons.push(
        <FloatingMenuItem
          label="Mail"
          icon={faEnvelopeOpen}
          action={contactViaMail}
        />,
    );
  }

  buttons.push(
      <FloatingMenuItem
        label=""
        icon={icon}
        action={toggleMenu}
      />,
  );

  return (
      <Container>
        <div className={className}>{buttons}</div>
      </Container>
  );
}

export default FloatingMenu;
