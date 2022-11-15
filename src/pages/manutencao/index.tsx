import axios from "axios";
import { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import FormularioManutencao from "../../components/Form/FormManutencao";
import { DataGrid } from "@mui/x-data-grid";

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
  { field: "placa", headerName: "Placa" },
  { field: "descrmanutencao", headerName: "Descrição da manutenção", width: 100 },
  { field: "tipomanutencao", headerName: "Tipo de manutenção"},
  { field: "datamanutencao", headerName: "Data da manutenção"},
  { field: "proximadata", headerName: "Data da proxima manutenção"},
  { field: "valor", headerName: "Valor da manutenção"},
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
      <DataGrid
        rows={manutencao}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
      />
    </Wrapper>
  );
}
export default getManutencao;
