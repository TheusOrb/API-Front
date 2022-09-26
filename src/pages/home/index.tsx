import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';

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

  return <Wrapper>meu deus</Wrapper>;
}
export default getVeiculos;
