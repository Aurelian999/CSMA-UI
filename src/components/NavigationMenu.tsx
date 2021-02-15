import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router';
import { ROUTES } from '../constants';
import { useStores } from '../stores/useStores';

function NavigationMenu(props: RouteComponentProps) {
  const { location } = props;
  const { userStore } = useStores();

  return (
    <Navbar bg="light" expand="lg" className="nav-menu">
      <Navbar.Brand href="/">
        <img
          src="/logo_text.png"
          width="50"
          height="30"
          className="d-inline-block align-top"
          alt="Logo Body Choice"
        />
        {' '}
        Body Choice
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" variant="pills" activeKey={location.pathname}>
          <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
          <Nav.Link href={ROUTES.CONTACT}>Contact</Nav.Link>
          <Nav.Link href={ROUTES.SERVICES}>Servicii si preturi</Nav.Link>
          <Nav.Link href={ROUTES.OFFERS}>Oferte</Nav.Link>

        </Nav>
        {
          !userStore.isAuthenticated && (
          <Nav className="justify-content-end" variant="pills" activeKey={location.pathname}>
            <Nav.Link href={ROUTES.SIGNUP} className="justify-content-end">Inregistrare</Nav.Link>
            <Nav.Link href={ROUTES.LOGIN} className="justify-content-end">Autentificare</Nav.Link>
          </Nav>
          )
        }
      </Navbar.Collapse>
    </Navbar>
  );
}

// TODO
// valabilitate abonament limitata?
export default withRouter(NavigationMenu);
