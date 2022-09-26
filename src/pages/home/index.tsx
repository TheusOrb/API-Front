import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, HomeHeader, Menu } from '../../components/styles';

interface Veiculo {
  placa: string;
}

function getVeiculos() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  useEffect(() => {
    axios
      .get('/api-pupi/veiculo')
      .then(({ data }) => {
        setVeiculos(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <title>Programa da Aletur</title>
      <HomeHeader>
        <h1>Aletur</h1>
      </HomeHeader>
      <Menu>
        <Button>Home</Button>
        <Button>Frota</Button>
        <Button>Manutenção</Button>
        <Button>Alertas</Button>
      </Menu>
    </div>
  );
}
export default getVeiculos;
