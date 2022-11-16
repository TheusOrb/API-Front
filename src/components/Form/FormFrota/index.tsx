import {
  Form,
  Input,
  OrganizationButoon,
  OrganizationForm,
} from "../styles";

import { useCallback } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const FormularioFrota: React.FC = () => {

  const addPost = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <>
      <Form>
        <OrganizationForm>
            <TextField id="outlined-basic" label="Placa do Veículo" variant="outlined" />
            <TextField id="outlined-basic" label="Veículo" variant="outlined" />
            <TextField id="outlined-basic" label="Marca" variant="outlined" />
            <TextField id="outlined-basic" label="Ano" variant="outlined" />
        </OrganizationForm>
        <OrganizationButoon>
          <Button variant="contained" color="success">+
          </Button>
          <Button variant="contained" color="error" >-
          </Button>
        </OrganizationButoon>
      </Form>
    </>
  );
};
export default FormularioFrota;
