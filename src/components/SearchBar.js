import React, {Component} from 'react';
import {Navbar, Container,Nav,Button,Form, InputGroup, Row } from "react-bootstrap"
import Logo from "./../assets/path.png";
import Like from "./../assets/love.png";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = { term: ''  }
  }
  
  render() {
    return(
    <div>
      <Navbar bg="primary" variant="dark">
      <Container>
        
      <Navbar.Brand href="#home">
          <img src={Logo} alt="" width="30" height="25" className="d-inline-block align-top"/>{' '}
          ARKADEMI</Navbar.Brand>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <InputGroup  className="d-flex">
          <Form.Control
            placeholder="Cari Kelas"
            aria-label=""
            aria-describedby="basic-addon1" />
          </InputGroup>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={Like} alt="" width="20" height="15" className="d-inline-block align-top"/>{' '}
          <Nav >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
          <Button variant="light">Masuk</Button>&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="primary">Daftar</Button>{' '}
          </Nav>
        </Container>
    </Navbar>
        </div>
    )                                                                       
  }  
}

export default SearchBar;