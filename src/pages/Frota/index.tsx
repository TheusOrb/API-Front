import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import FormularioFrota from "../../components/Form/FormFrota";
import { TableHome } from "../../components/Table/styles";

import Wrapper from "../../components/Wrapper";

interface Veiculo {
  id: number;
  name: string;
  brand: string;
  year: string;
  licensePlate: string;
}

const columns = [
  { field: "licensePlate", headerName: "Placa", flex: 1 },
  { field: "name", headerName: "Descrição do Veículo", flex: 1 },
  { field: "brand", headerName: "Marca", flex: 1 },
  { field: "year", headerName: "Ano", flex: 1 },
];

function getVeiculos() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  useEffect(() => {
    axios
      .get("/api/vehicle")
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
          getRowId={(columns) => columns.id}
        />
      </TableHome>
    </Wrapper>
  );
}
export default getVeiculos;
