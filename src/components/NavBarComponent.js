import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BmoNav from '../assets/NavBarBMO.png';
import '../App.css';

export default function NavbarComponentTwo() {
  return (
    <Row>
        <Col>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"}end><img
              alt="Bmo Logo"
              src={BmoNav}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className='font' as={Link} to={"sayhello"}>Hello</Nav.Link>
            <Nav.Link className='font' as={Link} to={"adding"}>Add</Nav.Link>
            <Nav.Link className='font' as={Link} to={"nameandtime"}>Time</Nav.Link>
            <Nav.Link className='font' as={Link} to={"greaterorless"}>GreaterThan</Nav.Link>
            <Nav.Link className='font' as={Link} to={"madlibs"}>MadLib</Nav.Link>
            <Nav.Link className='font' as={Link} to={"oddoreven"}>OddOrEven</Nav.Link>
            <Nav.Link className='font' as={Link} to={"reverseitnumeric"}>ReverseIt</Nav.Link>
            <Nav.Link className='font' as={Link} to={"reverseitalphabet"}>ReverseItAlpha</Nav.Link>
            <Nav.Link className='font' as={Link} to={"magic8"}>8Ball</Nav.Link>
            <Nav.Link className='font' as={Link} to={"restpicker"}>Restaurant</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Col>
</Row>
);


}

