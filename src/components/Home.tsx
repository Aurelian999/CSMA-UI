import React from 'react';
import {
  Container, Carousel, Row, Col,
} from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';
import FloatingMenu from './FloatingMenu';

function Home(): JSX.Element {
  return (
    <section>
      <NavigationMenu />
      <Container>
        {/* <h1>Home</h1> */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/carousel/recuzita_masaj.jpg"
              alt="Recuzita Masaj"
            />
            <Carousel.Caption>
              <h3 style={{ color: 'black' }}>Bun venit!</h3>
              <p style={{ color: 'black' }}>
                Aflați acum <a href="/servicii">serviciile</a> și{' '}
                <a href="/oferte">ofertele</a> noastre
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/carousel/ulei_masaj.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Dureri de spate?</h3>
              <p>Scapă de ele cu un masaj relaxant!</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="holder.js/800x400?text=Third slide&bg=20232a"
                          alt="Third slide"
                      />

                      <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                  </Carousel.Item> */}
        </Carousel>

        <br />
        <h2>Bucură-te de serviciile de masaj oferite:</h2>
        <br />
        <Row>
          <Col sm={3} md={3} lg={3}>
            <h3>Masaj de relaxare</h3>
            <a href="/servicii#relaxare">
              <img
                src="/img/masaj_relaxare.jpg"
                alt="Masaj de relaxare"
                style={{ width: '100%', height: '75%' }}
              />
            </a>
          </Col>
          <Col sm={3} md={3} lg={3}>
            <h3>Masaj anticelulitic</h3>
            <a href="/servicii#anticelulitic">
              <img
                src="/img/masaj_anticelulitic.jpg"
                alt="Masaj anticelulitic"
                style={{ width: '100%', height: '75%' }}
              />
            </a>
          </Col>
          <Col sm={3} md={3} lg={3}>
            <h3>Masaj combinat</h3>
            <a href="/servicii#combinat">
              <img
                src="/img/masaj_combinat.jpg"
                alt="Masaj combinat"
                style={{ width: '100%', height: '75%' }}
              />
            </a>
          </Col>
          <Col sm={3} md={3} lg={3}>
            <h3>Drenaj limfatic</h3>
            <a href="/servicii#drenaj">
              <img
                src="/img/drenaj_limfatic.jpg"
                alt="Drenaj limfatic"
                style={{ width: '100%', height: '75%' }}
              />
            </a>
          </Col>
          {/* <Assd sm={3} md={3} lg={3} text={"masajjajaja"} /> */}
        </Row>
      </Container>

      <FloatingMenu />

      <Footer />
    </section>
  );
}

const Assd = (props) => {
  const c1Style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div style={c1Style} ><Col sm={props.sm} md={props.md} lg={props.lg}><h2>{props.text}</h2><img src="/img/masaj_anticelulitic.jpg" alt="Masaj anticelulitic" style={{ width: '100%', height: '75%' }} /></Col></animated.div>

  );
};

export default Home;
