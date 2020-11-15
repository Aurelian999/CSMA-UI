import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';
import FloatingMenu from './FloatingMenu';

function Services(): JSX.Element {
  return (
    <div>
      <NavigationMenu />
      <Container>
        <h1>Servicii</h1>
        <p>
          Puteti sa va bucurati dumneavoastra de serviciile noastre, sau puteti
          achizitiona carduri cadou pentru alte persoane.
        </p>
        <br />
        <h3 id="masaje">Preturi masaje</h3>
        <Table striped hover>
          <thead>
            <tr>
              <th>
                <h3>Masaj</h3>
              </th>
              <th>
                <h3>Descriere</h3>
              </th>
              <th>
                <h3>Durata</h3>
              </th>
              <th>
                <h3>Pret</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr id="relaxare">
              <td>Masaj de relaxare</td>
              <td>Masajul spatelui + masaj cervical</td>
              <td>30 min</td>
              <td>40 RON</td>
            </tr>
            <tr>
              <td>Masaj de relaxare</td>
              <td>Masajul spatelui + masaj cervical</td>
              <td>60 min</td>
              <td>80 RON</td>
            </tr>
            <tr>
              <td>Masaj de relaxare</td>
              <td>
                Masajul spatelui, picioarelor, mâinilor, abdomenului și
                feței(dacă se dorește)
              </td>
              <td>1 h 30 min</td>
              <td>120 RON</td>
            </tr>
            <tr id="anticelulitic">
              <td>Masaj anticelulitic</td>
              <td>
                Masarea pentru eliminarea celulitei si a aspectului de coaja de
                portocala(fese, coapse, abdomen)
              </td>
              <td>40 min</td>
              <td>40 RON</td>
            </tr>
            <tr>
              <td>Masaj anticelulitic</td>
              <td>
                Masarea pentru eliminarea celulitei si a aspectului de coaja de
                portocala(fese, coapse, abdomen, gambe)
              </td>
              <td>50 min</td>
              <td>45 RON</td>
            </tr>
            <tr>
              <td>Masaj anticelulitic</td>
              <td>
                Masarea pentru eliminarea celulitei si a aspectului de coaja de
                portocala(fese, coapse, abdomen, gambe, mâini)
              </td>
              <td>1 h</td>
              <td>50 RON</td>
            </tr>
            <tr id="combinat">
              <td>Masaj combinat</td>
              <td>Masarea de relaxare + masaj anticelulitic</td>
              <td>50 min</td>
              <td>50 RON</td>
            </tr>
            <tr>
              <td>Masaj combinat</td>
              <td>Masarea de relaxare + masaj anticelulitic</td>
              <td>1 h</td>
              <td>55 RON</td>
            </tr>
            <tr id="drenaj">
              <td>Drenaj limfatic</td>
              <td>Drenaj limfatic</td>
              <td>1 h</td>
              <td>60 RON</td>
            </tr>
          </tbody>
        </Table>

        <br />
        <br />
        <h3 id="abonamente">Preturi abonamente</h3>
        <br />
        <Table striped hover>
          <thead>
            <tr>
              <th>
                <h3>Masaj</h3>
              </th>
              <th>
                <h3>Descriere</h3>
              </th>
              <th>
                <h3>Durata</h3>
              </th>
              <th>
                <h3>Pret</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Masaj de relaxare</td>
              <td>Masarea spatelui, mainilor si picioarelor</td>
              <td>10 sedinte x 30 min</td>
              <td>350 RON</td>
            </tr>
            <tr>
              <td>Masaj de relaxare</td>
              <td>Masarea spatelui, mainilor si picioarelor</td>
              <td>10 sedinte x 60 min</td>
              <td>750 RON</td>
            </tr>
            <tr>
              <td>Masaj de relaxare</td>
              <td>Masarea spatelui, mainilor si picioarelor</td>
              <td>10 sedinte x 1 h 30 min</td>
              <td>1100 RON</td>
            </tr>
            <tr>
              <td>Masaj anticelulitic</td>
              <td>
                Masarea pentru eliminarea celulitei si a aspectului de coaja de
                portocala
              </td>
              <td>10 sedinte x 40 min</td>
              <td>350 RON</td>
            </tr>
            <tr>
              <td>Masaj anticelulitic</td>
              <td>
                Masarea pentru eliminarea celulitei si a aspectului de coaja de
                portocala
              </td>
              <td>10 sedinte x 50 min</td>
              <td>400 RON</td>
            </tr>
            <tr>
              <td>Masaj anticelulitic</td>
              <td>
                Masarea pentru eliminarea celulitei si a aspectului de coaja de
                portocala
              </td>
              <td>10 sedinte x 1 h</td>
              <td>450 RON</td>
            </tr>
            <tr>
              <td>Masaj combinat</td>
              <td>Masarea de relaxare + masaj anticelulitic</td>
              <td>10 sedinte x 50 min</td>
              <td>450 RON</td>
            </tr>
            <tr>
              <td>Masaj combinat</td>
              <td>Masarea de relaxare + masaj anticelulitic</td>
              <td>10 sedinte x 1 h</td>
              <AnimatedNumber val={500} />
            </tr>
          </tbody>
        </Table>
      </Container>
      <FloatingMenu />
      <Footer />
    </div>
  );
}

const AnimatedNumber = (nr) => {
  const props = useSpring({
    number: nr.val,
    from: { number: 1 },
    config: { duration: 2000 },
  });

  return (
    <td>
      <animated.span>
        {props.number.interpolate((val) => Math.floor(val))}
      </animated.span>{' '}
      RON
    </td>
  );
};

export default Services;
