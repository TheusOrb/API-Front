import axios from "axios";
import { useEffect, useState } from "react";
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

interface Manutencao {
  placaveiculo: string;
  descrmanutencao: string;
  tipomanutencao: string;
  datamanutencao: string;
  proximadata: string;
  valor: string;
}

function getManutencao() {
  const [manutencao, setManutencao] = useState<Manutencao[]>([]);

  useEffect(() => {
    axios
      .get("/api/manutencao")
      .then(({ data }) => {
        setManutencao(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <Wrapper>
      <TableHome>
        <TableHead>
          <HeadRow>
            <HeadData>Placa</HeadData>
            <HeadData>Manuteção</HeadData>
            <HeadData>Tipo</HeadData>
            <HeadData>Data da Manutenção</HeadData>
            <HeadData>Data da Proxíma Manutenção</HeadData>
            <HeadData>Valor</HeadData>
          </HeadRow>
        </TableHead>
        <TableBody>
          {manutencao.map((manutencao) => (
            <BodyRow>
              <TableData key={manutencao.placaveiculo}>{manutencao.placaveiculo}</TableData>
              <TableData key={manutencao.placaveiculo}>{manutencao.descrmanutencao}</TableData>
              <TableData key={manutencao.placaveiculo}>{manutencao.tipomanutencao}</TableData>
              <TableData key={manutencao.placaveiculo}>{manutencao.datamanutencao}</TableData>
              <TableData key={manutencao.placaveiculo}>{manutencao.proximadata}</TableData>
              <TableData key={manutencao.placaveiculo}>{manutencao.valor}</TableData>
            </BodyRow>
          ))}
          ;
        </TableBody>
      </TableHome>
    </Wrapper>
  );
}
export default getManutencao;