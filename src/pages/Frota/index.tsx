import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import FormularioFrota from "../../components/Form/FormFrota";


import Wrapper from "../../components/Wrapper";

interface Veiculo {
  placa: string;
  descrveiculo: string;
  marca: string;
  ano: string;
}

const columns = [
  { field: "placa", headerName: "Placa" },
  { field: "descrveiculo", headerName: "Descrição do Veículo", width: 100 },
  { field: "marca", headerName: "Marca"},
  { field: "ano", headerName: "Ano"},
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
     <DataGrid
        rows={veiculos}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[5]}
      />
    </Wrapper>
  );
}
export default getVeiculos;