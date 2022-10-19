import axios from "axios";
import { useEffect, useState } from "react";
import { Add, Form, Input, OrganizationButoon, OrganizationForm, Remove } from "../../components/Form/styles";
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
              placeholder="Veículo"
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Marca"
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Ano"
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
