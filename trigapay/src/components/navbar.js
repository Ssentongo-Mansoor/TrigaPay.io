import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">SindiPay</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">How It Works</NavLink>
            </NavItem>
            <NavItem>
            	<NavLink>News</NavLink>
            </NavItem>
            <NavItem>
            	<NavLink>About</NavLink>
            </NavItem>
            <NavItem>
            	<NavLink>Contact</NavLink>
            </NavItem>
          </Nav>
          <Button color="success">Login</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
