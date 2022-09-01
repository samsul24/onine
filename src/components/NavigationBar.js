import { Navbar, Container, Nav } from "react-bootstrap"
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    return (
        <div>

            <Navbar className="overflow-auto w-full mb-3 m-3">
                <Container>
                    <Nav className="justify-content-between flex-grow-1 pe-3">
                        <NavDropdown title="Kategori" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Kategori 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Kategori 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Kategori 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>Bisnis</Nav.Link>
                        <Nav.Link>Keuangan</Nav.Link>
                        <Nav.Link>Pengembangan Karir</Nav.Link>
                        <Nav.Link>Sertifikasi</Nav.Link>
                        <Nav.Link>Teknologi</Nav.Link>
                        <Nav.Link>Bahasa</Nav.Link>
                        <Nav.Link>Korporat</Nav.Link>
                        <Nav.Link>Hobi</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavigationBar