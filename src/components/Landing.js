import Carousel from 'react-bootstrap/Carousel';
import {Container,Nav} from "react-bootstrap"
import Page from "./../assets/jvfkbv.png";
import Page1 from "./../assets/page/Mask1.png";
import Page2 from "./../assets/page/Mask2.png";
import Page3 from "./../assets/page/Mask3.png";
function Landing() {
  return (
         <Container>
    <Carousel>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Page}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Page}
          alt="Second slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Page}
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>
    <Carousel>
    <Carousel.Item>
        <br></br>
    <img src={Page1} alt="" width="350" className="d-inline-block align-top"/>{' '} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src={Page2} alt=""  width="350" className="d-inline-block align-top"/>{' '} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src={Page3} alt="" width="350"  className="d-inline-block align-top"/>{' '}
    </Carousel.Item>
    <Carousel.Item>
    <img src={Page2} alt=""  width="350" className="d-inline-block align-top"/>{' '} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src={Page3} alt="" width="350"  className="d-inline-block align-top"/>{' '}
    <img src={Page1} alt="" width="350" className="d-inline-block align-top"/>{' '} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Carousel.Item>
    <Carousel.Item>
    <img src={Page3} alt="" width="350"  className="d-inline-block align-top"/>{' '}
    <img src={Page1} alt="" width="350" className="d-inline-block align-top"/>{' '} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src={Page2} alt=""  width="350" className="d-inline-block align-top"/>{' '} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Carousel.Item>
    </Carousel>

        <br></br>
        <center>

        <Nav.Link>Lihat Semua Spesialisasi</Nav.Link>
        </center>
    
    </Container>
  );
}

export default Landing;