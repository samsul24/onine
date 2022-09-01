import {Navbar, Container,Nav } from "react-bootstrap"
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    return (
    <div>
   
    <Navbar>
        <Container>
        <Nav>
        <NavDropdown title="Kategori" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Kategori 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Kategori 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kategori 3</NavDropdown.Item>
            </NavDropdown>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link>Bisnis</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link>Keuangan</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link>Pengembangan Karir</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link>Sertifikasi</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link>Teknologi</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link>Bahasa</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link>Korporat</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link>Hobi</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
        </div>
    )
}
export default NavigationBar