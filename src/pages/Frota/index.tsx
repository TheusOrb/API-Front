import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../../components/Table";
import Wrapper from "../../components/Wrapper";

interface Veiculo {
  placa: string;
  veiculodescr: string;
  marca: string;
}

function getVeiculos() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  useEffect(() => {
    axios
      .get("/api/veiculo")
      .then(({ data }) => {
        setVeiculos(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <Wrapper>
      <Table>
          {veiculos.map((veiculos) => (
            <div key={veiculos.placa}>{veiculos.placa}</div>
          ))}
          ;
      </Table>
    </Wrapper>
  );
}
export default getVeiculos;
