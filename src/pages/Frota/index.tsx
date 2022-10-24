import axios from "axios";
import { useEffect, useState } from "react";
import FormularioFrota from "../../components/Form/FormFrota";
import {
  TableHome,
  TableBody,
  BodyRow,
  TableData,
  HeadData,
  TableHead,
  HeadRow,
} from "../../components/Table/styles";

import Wrapper from "../../components/Wrapper";

interface Veiculo {
  placa: string;
  descrveiculo: string;
  marca: string;
  ano: string;
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
     <FormularioFrota></FormularioFrota>
      <TableHome>
        <TableHead>
          <HeadRow>
            <HeadData>Placa</HeadData>
            <HeadData>Veiculo</HeadData>
            <HeadData>Marca</HeadData>
            <HeadData>Ano</HeadData>
          </HeadRow>
        </TableHead>
        <TableBody>
          {veiculos.map((veiculos) => (
            <BodyRow>
              <TableData key={veiculos.placa}>{veiculos.placa}</TableData>
              <TableData key={veiculos.placa}>{veiculos.descrveiculo}</TableData>
              <TableData key={veiculos.placa}>{veiculos.marca}</TableData>
              <TableData key={veiculos.placa}>{veiculos.ano}</TableData>
            </BodyRow>
          ))}
          ;
        </TableBody>
      </TableHome>
    </Wrapper>
  );
}
export default getVeiculos;