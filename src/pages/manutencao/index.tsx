import axios from "axios";
import { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import FormularioManutencao from "../../components/Form/FormManutencao";
import { DataGrid } from "@mui/x-data-grid";
import { TableHome } from "../../components/Table/styles";

interface Manutencao {
  idmanutencao: string;
  placaveiculo: string;
  descrmanutencao: string;
  tipomanutencao: string;
  datamanutencao: string;
  proximadata: string;
  valor: string;
}

const columns = [
  { field: "placaveiculo", headerName: "Placa", flex: 2 },

  {
    field: "descrmanutencao",
    headerName: "Descrição da manutenção",
    flex: 3,
  },
  { field: "tipomanutencao", headerName: "Tipo de manutenção", flex: 1.6 },
  { field: "datamanutencao", headerName: "Data da manutenção", flex: 2 },
  {
    field: "proximadata",
    headerName: "Data da proxima manutenção",
    flex: 2,
  },
  { field: "valor", headerName: "Valor da manutenção", flex: 2 },
];

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
      <FormularioManutencao></FormularioManutencao>
      <TableHome>
        <DataGrid
          rows={manutencao}
          columns={columns}
          pageSize={10}
          getRowId={(columns) => columns.idmanutencao}
        />
      </TableHome>
    </Wrapper>
  );
}
export default getManutencao;
