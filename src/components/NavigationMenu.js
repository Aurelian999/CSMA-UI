import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { withRouter } from "react-router";

class NavigationMenu extends Component {

  render() {
    const { location } = this.props;
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}


// TODO 
// reguli gen https://www.balinessespa.ro/reguli-de-eticheta/ - daca ajunge mai tarziu nu i se face numai cat timp mai are ramas - la pret integral
// valabilitate abonament limitata?
export default withRouter(NavigationMenu);