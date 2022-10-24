import {
  Add,
  Form,
  Input,
  OrganizationButoon,
  OrganizationForm,
  Remove,
} from "../styles";

import {useForm} from "react-hook-form"

const { register, handleSubmit, formState: { errors } } =  useForm();

const FormularioFrota: React.FC = () => {
  return (

    
    <>
      <Form>
        <OrganizationForm>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Placa do Veículo"{...register("placa")}
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Veículo"{...register("veiculo")}
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Marca"{...register("marca")}
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Ano"{...register("ano")}
            />
          </div>
        </OrganizationForm>
        <OrganizationButoon>
          <Add>+</Add>
          <Remove>-</Remove>
        </OrganizationButoon>
      </Form>
    </>
  );
};
export default FormularioFrota;
