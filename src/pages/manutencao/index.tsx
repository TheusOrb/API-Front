import axios from "axios";
import { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import FormularioManutencao from "../../components/Form/FormManutencao";
import { DataGrid } from "@mui/x-data-grid";
import { TableHome } from "../../components/Table/styles";

interface Manutencao {
  id: number;
  licensePlace: string;
  vehicleName: string;
  name: string;
  typeDescription: string;
  date: string;
  value: string;
}

const columns = [
  { field: "vehicleName", headerName: "Veiculo", flex: 2 },
  { field: "licensePlace", headerName: "Placa", flex: 2 },
  {
    field: "name",
    headerName: "Descrição da manutenção",
    flex: 3,
  },
  { field: "typeDescription", headerName: "Tipo de manutenção", flex: 1.6 },
  { field: "date", headerName: "Data da manutenção", flex: 2 },
  { field: "value", headerName: "Valor da manutenção", flex: 2 },
];

function getManutencao() {
  const [manutencao, setManutencao] = useState<Manutencao[]>([]);

  useEffect(() => {
    axios
      .get("/api/maintenance")
      .then(({ data }) => {
        setManutencao(data);
      })
      .catch((error) => {});
  }, []);
  console.log(manutencao)
  return (
    <Wrapper>
      <FormularioManutencao></FormularioManutencao>
      <TableHome>
        <DataGrid
          rows={manutencao}
          columns={columns}
          pageSize={5}
          getRowId={(columns) => columns.id}
        />
      </TableHome>
    </Wrapper>
  );
}
export default getManutencao;
