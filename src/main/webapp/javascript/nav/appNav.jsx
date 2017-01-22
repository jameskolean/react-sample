/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "" }] */
import React from 'react'
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class AppNav extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <div>Teach Plan</div>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <LinkContainer to="/welcome">
            <NavItem >Welcome</NavItem>
          </LinkContainer>
          <LinkContainer to='/admin-user'>
            <NavItem >User Admin</NavItem>
          </LinkContainer>
          <LinkContainer to='/simpleState'>
            <NavItem >SimpleState</NavItem>
          </LinkContainer>
          <LinkContainer to='/nestedData'>
            <NavItem >Nested Data</NavItem>
          </LinkContainer>
          <LinkContainer to='/rest'>
            <NavItem >Rest</NavItem>
          </LinkContainer>
          <LinkContainer to='/composable-component'>
            <NavItem >Composable Components</NavItem>
          </LinkContainer>
          <LinkContainer to='/redux'>
            <NavItem >Redux</NavItem>
          </LinkContainer>
          <LinkContainer to='/lesson-plan'>
            <NavItem >Lesson Plan</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }
}
