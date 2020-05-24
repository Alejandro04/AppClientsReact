import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
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
import Login from './auth/LoginModal'
import { connect } from 'react-redux'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { isAuthenticated, user } = props.auth

  const authLinks = (
    <Fragment>
      <NavItem>
        <span className="navbar-text ml-3 mr-3">
          <Link to={'/users'}>
            Users
          </Link>
        </span>
      </NavItem>
      <NavItem>
      <span className="navbar-text ml-3 mr-3">
          <Link to={'/clients'}>
            Clients
          </Link>
        </span>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
      <NavItem>
        <span className="navbar-text mr-3 nameText">
          <strong>Hello {user ? user.name : ''}</strong>
        </span>
      </NavItem>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <Login />
      </NavItem>
    </Fragment>
  )


  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <NavbarBrand href="/">ClientsApp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(NavBar)