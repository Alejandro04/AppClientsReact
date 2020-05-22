import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <NavbarBrand href="/">ClientsApp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <RegisterModal/>
            </NavItem>
            <NavItem>
              <Logout/>
            </NavItem>
          </Nav>
          <NavbarText>Github</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;