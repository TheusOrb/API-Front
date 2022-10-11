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

import bootstrap from "bootstrap";
import { Form, Input, Organization, Pack } from "../../components/Form/styles";

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
        <Organization>
          <div>
            <Pack className="input-group-text" id="inputGroup-sizing-default">
              Placa do Veiculo
            </Pack>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div>
            <Pack className="input-group-text" id="inputGroup-sizing-default">
              Descrição do Veiculo
            </Pack>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div>
            <Pack className="input-group-text" id="inputGroup-sizing-default">
              Marca
            </Pack>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </Organization>
        <Organization>
          <div>
            <Pack className="input-group-text" id="inputGroup-sizing-default">
              Data da Manutenção
            </Pack>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div>
            <Pack className="input-group-text" id="inputGroup-sizing-default">
              Data da Proxima Manutenção
            </Pack>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div>
            <Pack className="input-group-text" id="inputGroup-sizing-default">
              Valor da Manutenção
            </Pack>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </Organization>
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
