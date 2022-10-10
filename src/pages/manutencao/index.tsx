import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Input, Label, Pack } from "../../components/Form/styles";
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
  idmanutencao: string;
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
      <Form>
        <Label>
          <Pack>Placa:</Pack>
          <Input type="text" name="name" />
          <Pack>Manutenção:</Pack>
          <Input type="text" name="name" />
          <Pack>Tipo:</Pack>
          <Input type="text" name="name" />
          <Pack>Data da Manutenção:</Pack>
          <Input type="text" name="name" />
          <Pack>Data da Proxima Manutenção:</Pack>
          <Input type="text" name="name" />
          <Pack>Valor da Manutenção:</Pack>
          <Input type="text" name="name" />
        </Label>
        <Input type="submit" value="Enviar" />
      </Form>
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
              <TableData key={manutencao.idmanutencao}>
                {manutencao.placaveiculo}
              </TableData>
              <TableData key={manutencao.idmanutencao}>
                {manutencao.descrmanutencao}
              </TableData>
              <TableData key={manutencao.idmanutencao}>
                {manutencao.tipomanutencao}
              </TableData>
              <TableData key={manutencao.idmanutencao}>
                {manutencao.datamanutencao}
              </TableData>
              <TableData key={manutencao.idmanutencao}>
                {manutencao.proximadata}
              </TableData>
              <TableData key={manutencao.idmanutencao}>
                {manutencao.valor}
              </TableData>
            </BodyRow>
          ))}
          ;
        </TableBody>
      </TableHome>
    </Wrapper>
  );
}
export default getManutencao;
