import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { ColumBody } from "../../components/Table/styles";
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
        <div>Placa</div><div>Descrição do Veiculo</div>
        {veiculos.map((veiculos) => (
          <>
            <ColumBody key ={veiculos.placa}>
              {veiculos.placa}{veiculos.veiculodescr}</ColumBody>
          </>
        ))}
      </Table>
    </Wrapper>
  );
}
export default getVeiculos;
