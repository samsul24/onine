import {Navbar, Container,Nav,Button,Col,Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import Trending from "./../assets/trending.png";
import list1 from "./../assets/isi1.png";
import discount from "./../assets/discount.png";
import time from "./../assets/time.png";
import Kategori1 from "./../assets/populer/Kategori1.png";
import Kategori2 from "./../assets/populer/Kategori2.png";
import Kategori3 from "./../assets/populer/Kategori3.png";
import Kategori4 from "./../assets/populer/Kategori4.png";
import Kategori5 from "./../assets/populer/Kategori5.png";
import Kategori6 from "./../assets/populer/Kategori6.png";
import Kategori7 from "./../assets/populer/Kategori7.png";
import Rectangle from "./../assets/terbaru/Rectangle.png";
import Rectangle1 from "./../assets/terbaru/Rectangle1.png";
import Rectangle2 from "./../assets/terbaru/Rectangle2.png";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const Isi = () => {
    return (
    <div>
        <Container>
   
    <Navbar className="overflow-auto w-full mb-3 m-3">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Navbar.Brand href="#home">
          <img src={Trending} alt="" className="d-inline-block align-top"/>{' '}
          &nbsp;&nbsp;<b>Trending</b></Navbar.Brand>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Navbar>
    
    {/* <CardGroup> */}
    <Row xs={1} md={5} className="g-1">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
    <Card >
      <Card.Img variant="top"src={list1} alt=""  />
    </Card>
     </Col>
      ))}
    </Row>
    
<Navbar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Navbar.Brand href="#home">
      <img src={discount} alt="" className="d-inline-block align-top"/>{' '}
      &nbsp;&nbsp;<b>Flash Sale</b> </Navbar.Brand>&nbsp;&nbsp;berakhir dalam&nbsp;&nbsp;;&nbsp; <img src={time} alt="" className="d-inline-block align-top"/>{' '}
</Navbar>
<Row xs={1} md={5} className="g-1">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
    <Card >
      <Card.Img variant="top"src={list1} alt=""  />
    </Card>
     </Col>
      ))}
    </Row>
            <Navbar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Navbar.Brand href="#home">
        &nbsp;&nbsp;<b>Kategori Terpopuler</b> </Navbar.Brand>&nbsp;&nbsp;
    </Navbar>
    <Row xs={3} md={1} className="g-4">
    <Col>
                <img src={Kategori1} alt=""width="140" height="140"  className="d-inline-block align-top"/>
                <img src={Kategori2} alt=""width="140" height="140"  className="d-inline-block align-top"/>
                <img src={Kategori3} alt=""width="140" height="140"  className="d-inline-block align-top"/>
                <img src={Kategori4} alt=""width="140" height="140"  className="d-inline-block align-top"/>
                <img src={Kategori5} alt=""width="140" height="140"  className="d-inline-block align-top"/>
                <img src={Kategori6} alt=""width="140" height="140"  className="d-inline-block align-top"/>
                <img src={Kategori7} alt=""width="140" height="140"  className="d-inline-block align-top"/>
                </Col>
                </Row>
                <br></br>
            <center>

        <Button variant="outline-primary">Lihat Semua Kategori</Button>
        </center>
        <Navbar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Navbar.Brand href="#home">
      &nbsp;&nbsp;<b>Promo Spesial Untukmu</b> </Navbar.Brand>&nbsp;&nbsp;
</Navbar>
<Row xs={1} md={3} className="g-1">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
    <Card >
      <Card.Img variant="top"src={Rectangle1} alt=""  />
    </Card>
     </Col>
      ))}
    </Row>
            {/* <img src={Rectangle1} alt="" width="360" height="200" className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
            <img src={Rectangle1} alt="" width="360" height="200" className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
            <img src={Rectangle2} alt="" width="360" height="200" className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp; */}
            <br></br>
            <Navbar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Navbar.Brand href="#home">
      &nbsp;&nbsp;<b>Lembaga</b> </Navbar.Brand>&nbsp;&nbsp;
</Navbar>
<img src={Kategori1} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori2} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori3} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori4} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori5} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori6} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori7} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori1} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori2} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori3} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori4} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori5} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori6} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
                <img src={Kategori7} alt=""width="140" height="140"  className="d-inline-block align-top"/>{' '}&nbsp;&nbsp;&nbsp;
<Navbar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Navbar.Brand href="#home">
      &nbsp;&nbsp;<b>Terbaru</b> </Navbar.Brand>&nbsp;&nbsp;
</Navbar>
<Row xs={1} md={5} className="g-1">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
    <Card >
      <Card.Img variant="top"src={list1} alt=""  />
    </Card>
     </Col>
      ))}
    </Row> <br></br>
            <Navbar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Navbar.Brand href="#home">
      &nbsp;&nbsp;<b>Bisnis</b> </Navbar.Brand>&nbsp;&nbsp;
</Navbar>
<Row xs={1} md={5} className="g-1">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
    <Card >
      <Card.Img variant="top"src={list1} alt=""  />
    </Card>
     </Col>
      ))}
    </Row><br></br>
            <Navbar>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Navbar.Brand href="#home">
      &nbsp;&nbsp;<b>Pengembangan Karir</b> </Navbar.Brand>&nbsp;&nbsp;
</Navbar>
<Row xs={1} md={5} className="g-1">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
    <Card >
      <Card.Img variant="top"src={list1} alt=""  />
    </Card>
     </Col>
      ))}
    </Row><br></br><br></br><br></br>
            <br></br>
            <center>
           <h1> <b>Testimoni</b></h1>
            </center>

        </Container>
        </div>
    )
}
export default Isi