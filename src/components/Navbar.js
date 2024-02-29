import {Container, Nav, Navbar, NavDropdown, Modal, Form, Button, Offcanvas}from 'react-bootstrap';
import { useState } from 'react';
import logo from '../images/Logo.png';

function NavbarComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <Navbar expand="lg" style={{ height: '100px', width: '100%', zIndex: '1', position: 'fixed', backgroundImage: 'linear-gradient(to bottom right, #e1c684, #fff6ea)', fontFamily: 'Agbalumo, cursive', fontSize: '22px' }}>
        <Navbar.Brand href="#" className="navbar-center text-black">
        <img
            src={logo}
            height="60px"
            alt="Logo"
            loading="lazy"
            style={{ marginTop: "-1px", marginLeft: "60px" }}
            className="me-5"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
            <img
            src={logo}
            height="60px"
            alt="Logo"
            loading="lazy"
            style={{ marginTop: "-1px" }}
            className="me-5"
          />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', fontFamily: 'Prata' }}
              navbarScroll>
              <Nav.Link href="#home" className="button-pop-out">Home</Nav.Link>
              <Nav.Link href="#services" className="button-pop-out">Services</Nav.Link>
              <Nav.Link href="#gallery" className="button-pop-out">Gallery</Nav.Link>
                <NavDropdown title="Events" id="events-dropdown" className="button-pop-out">
                  <NavDropdown.Item href="#yogaSound">Yoga & Sound</NavDropdown.Item>
                  <NavDropdown.Item href="#eventPrivate">Private Events</NavDropdown.Item>
                  <NavDropdown.Item href="#eventMoon">Moon Events</NavDropdown.Item>
                  <NavDropdown.Item href="#workshop">Workshops</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="About" id="about-dropdown" className="button-pop-out">
                  <NavDropdown.Item href="#mission">Our Mission</NavDropdown.Item>
                  <NavDropdown.Item href="#companyBio">Company Origins</NavDropdown.Item>
                  <NavDropdown.Item href="#bioBreeC">Bree C Bio</NavDropdown.Item>
                  <NavDropdown.Item href="#bioBreeM">Bree M Bio</NavDropdown.Item>
                </NavDropdown>
              <Nav.Link href="#testimonials" className="button-pop-out">Testimonials</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <div style={{ backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', fontFamily: 'Agbalumo, cursive'}}>
        <Modal.Header closeButton>
          <Modal.Title>Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Yoga Master"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="really@goodatyoga.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#a2d2ff', borderColor: '#a2d2ff', color: 'black' }} onClick={handleClose}>
            Send Message
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}

export default NavbarComponent;
