import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, HomeHeader, Menu } from '../../components/styles';

const url = 'http://localhost:8080/api/';
interface Teste {
  placa: string;
}
function getVeiculos() {
  const [veiculo, setVeiculo] = useState<Teste[]>([]);

  useEffect(() => {
    axios
      .get(url + 'veiculo')
      .then(({ data }) => {
        setVeiculo(data);
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
