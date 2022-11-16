import { Form, Input, OrganizationButoon, OrganizationForm } from "../styles";

import { useCallback } from "react";
import { Button, TextField } from "@mui/material";

const FormularioManutencao: React.FC = () => {
  const addPost = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <>
      <Form>
        <OrganizationForm>
          <TextField
            id="outlined-basic"
            label="Placa do Veículo"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Manutenção"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Tipo de Manutenção"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Data da Manutenção"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Data da Proxima Manutenção"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Valor" variant="outlined" />
        </OrganizationForm>
        <OrganizationButoon>
          <Button variant="contained" color="success">
            +
          </Button>
          <Button variant="contained" color="error">
            -
          </Button>
        </OrganizationButoon>
      </Form>
    </>
  );
};

export default FormularioManutencao;
