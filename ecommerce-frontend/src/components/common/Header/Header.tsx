import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import HeaderBasket from '../../ecommerce/HeaderBasket/HeaderBasket';
import styles from './styles.module.css';
// import { NavLink } from 'react-router-dom';
const { headerContainer, headerLogo } = styles;
const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>our</span> <Badge bg="info">Ecom</Badge>
        </h1>

        <HeaderBasket />
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="categories">Categories</Nav.Link>
              <Nav.Link href="about-us">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
