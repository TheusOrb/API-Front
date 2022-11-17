import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import FormularioFrota from "../../components/Form/FormFrota";
import { TableHome } from "../../components/Table/styles";

import Wrapper from "../../components/Wrapper";

interface Veiculo {
  placa: string;
  descrveiculo: string;
  marca: string;
  ano: string;
}

const columns = [
  { field: "placa", headerName: "Placa", flex: 1 },
  { field: "descrveiculo", headerName: "Descrição do Veículo", flex: 1 },
  { field: "marca", headerName: "Marca", flex: 1 },
  { field: "ano", headerName: "Ano", flex: 1 },
];

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
        <DataGrid
          rows={veiculos}
          columns={columns}
          pageSize={5}
          getRowId={(columns) => columns.placa}
        />
      </TableHome>
    </Wrapper>
  );
}
export default getVeiculos;
