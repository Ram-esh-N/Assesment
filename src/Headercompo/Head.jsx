import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import { Home } from '../Nav/Home';
import { About } from '../Nav/About';
import { Skill } from '../Nav/Skill';
import { Project } from '../Nav/Project';
import { Testimonal } from '../Nav/Testimonal';
import { TimeLine } from '../Nav/TimeLine';
import { Contact } from '../Nav/Contact';


export const Head = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div id='g'>
      <header className='p-1 border rounded'>
        <Navbar expand="lg" className="bg-body-tertiary" id='g1'>
          <Container fluid>
            <Navbar.Brand className='col-5' href="#"><span id='s'>p</span>ortfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="col-5 me-auto my-2 my-lg-0"
                style={{ maxHeight: '300px' }}
                navbarScroll>
                <Nav.Link id="link"  className='text-white' href="/"> <Link to="/" className='text-white'>Home</Link></Nav.Link>
                <Nav.Link id="link"  className='text-white' href="/About"> <Link to="/About" className='text-white'>About</Link></Nav.Link>
                <Nav.Link id="link"  className='text-white' href="#action2"> <Link to="/Skill" className='text-white'>Skill</Link></Nav.Link>
                <Nav.Link id="link"  className='text-white' href="#action2"> <Link to="/Project" className='text-white'>Projects</Link></Nav.Link>
                <Nav.Link id="link"  className='text-white' href="#action2"> <Link to="/Testimonal" className='text-white'>Testimonals</Link></Nav.Link>
                <Nav.Link id="link"  className='text-white' href="#action2"> <Link to="/contact" className='text-white'>contact</Link></Nav.Link>
                <Nav.Link id="link"  className='text-white' href="#action2"> <Link to="/TimeLine" className='text-white'>TimeLine</Link></Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button variant="outline-danger">Let's Talk</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    


      </header>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Testimonal/>
      <TimeLine/>
      <Contact/>
    </div>
  )
}
