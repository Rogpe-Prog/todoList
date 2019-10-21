import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default props => (

    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
    <Navbar.Brand href="/"><i className='fa fa-calendar-check-o'></i> ToDo App</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Tasks</Nav.Link>
        <Nav.Link href="#/about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
     


    
)