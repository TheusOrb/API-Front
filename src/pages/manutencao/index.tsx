import axios from "axios";
import { useEffect, useState } from "react";
("");
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

import {
  Add,
  Form,
  Input,
  OrganizationButoon,
  OrganizationForm,
  Remove,
} from "../../components/Form/styles";

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
        <OrganizationForm>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Placa do Veículo"
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Manutenção"
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Tipo de Manutenção"
            />
          </div>
        </OrganizationForm>
        <OrganizationForm>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Data da Manutenção"
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Data da Proxima Manutenção"
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Valor da Manutenção"
            />
          </div>
        </OrganizationForm>
        <OrganizationButoon>
          <Add>+</Add>
          <Remove>-</Remove>
        </OrganizationButoon>
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
