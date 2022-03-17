import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MainNavbar = () => (
  <>
    <Navbar collapseOnSelect expand="lg">
      <Container>
      <Link to='/'>
        <Navbar.Brand>TodoList</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link>
            <Link to='/'>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/about'>
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/lists'>
              Lists
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <ul>
      <Link to='/'>
        <li>
          Home
        </li>
      </Link>
      <Link to='/about'>
        <li>
          About
        </li>
      </Link>
      <Link to='/lists'>
        <li>
          Lists
        </li>
      </Link>
    </ul> */}
  </>
)

export default MainNavbar;