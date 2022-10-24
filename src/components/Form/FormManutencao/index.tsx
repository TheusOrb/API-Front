import {
  Add,
  Form,
  Input,
  OrganizationButoon,
  OrganizationForm,
  Remove,
} from "../styles";

import {useForm} from "react-hook-form"
import { Console } from "console";




const FormularioManutencao: React.FC = () => {

  const { register, handleSubmit } =  useForm();

  const addPost = (data: any) => console.log(data);

  return (
    <>
      <Form onSubmit={handleSubmit(addPost)}>
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
              placeholder="Manutenção"{...register("manutencao")}
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Tipo de Manutenção"{...register("tipomanutencao")}
            />
          </div>
        </OrganizationForm>
        <OrganizationForm>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Data da Manutenção"{...register("datamanutencao")}
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Data da Proxima Manutenção"{...register("proximadata")}
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Valor da Manutenção"{...register("valor")}
            />
          </div>
        </OrganizationForm>
        <OrganizationButoon>
          <Add type="submit">+</Add>
          <Remove>-</Remove>
        </OrganizationButoon>
      </Form>
    </>
  );
};

export default FormularioManutencao;

