import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';

function NavigationMenu(props: any) {
  const { location } = props;
  return (
      <Navbar bg="light" expand="lg" className="nav-menu">
        <Navbar.Brand href="/">
        <img
      src="/logo_text.png"
      width="50"
      height="30"
      className="d-inline-block align-top"
      alt="Logo Body Choice"
      />{ ' '}
          Body Choice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" variant="pills" activeKey={location.pathname} >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/servicii">Servicii si preturi</Nav.Link>
            <Nav.Link href="/oferte">Oferte</Nav.Link>
            <Nav.Link href="/signup">Inregistrare</Nav.Link>
            <Nav.Link href="/login">Autentificare</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

// TODO
// valabilitate abonament limitata?
export default withRouter(NavigationMenu);
