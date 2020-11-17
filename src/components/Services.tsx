import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';
import FloatingMenu from './FloatingMenu';
import { salonService } from '../services/salon';
import { Service } from '../interfaces/SalonService';

function Services(): JSX.Element {
  const [data, setData] = useState<Service[]>([]);

  useEffect(() => {
    salonService.getAll().then((resp) => {
      console.log(resp);
      setData(resp.data);
    }, (err) => {
      // TODO error handling
      console.log(err);
    });
  }, []);

  function createServicesTableRow(serviceData: Service) {
    return (
      <tr>
        <td>{serviceData.name}</td>
        <td>{serviceData.description}</td>
        <td>
          {serviceData.duration}
          {' '}
          minute
        </td>
        <td>
          {serviceData.price}
          {' '}
          RON
        </td>
        <td>
          <button type="button" className="btn-lg">Book</button>
        </td>
      </tr>
    );
  }

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
            {data.map((service) => createServicesTableRow(service))}
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
              <td>500 RON</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <FloatingMenu />
      <Footer />
    </div>
  );
}

export default Services;
