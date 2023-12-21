import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import menuLink from '../../assets/menuLink';

const Header = ({brandText}:any) => {
    return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">{brandText}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuLink.map((L, index) =>
                <Nav.Link key={index} href={L.path}>{L.nome}</Nav.Link>
            )};
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Header;