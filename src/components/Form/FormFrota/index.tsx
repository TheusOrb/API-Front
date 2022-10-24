import {
  Add,
  Form,
  Input,
  OrganizationButoon,
  OrganizationForm,
  Remove,
} from "../styles";

import { useForm } from "react-hook-form";
import { useCallback } from "react";

const FormularioFrota: React.FC = () => {
  const { register, getValues} = useForm({});

  const addPost = useCallback((data: any) => {
    console.log(data);
  }, []);

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
              placeholder="Placa do Veículo"
              {...register("placa")}
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Veículo"
              {...register("veiculo")}
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Marca"
              {...register("marca")}
            />
          </div>
          <div>
            <Input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Ano"
              {...register("ano")}
            />
          </div>
        </OrganizationForm>
        <OrganizationButoon>
          <Add onClick={() => addPost(getValues())}>+</Add>
          <Remove>-</Remove>
        </OrganizationButoon>
      </Form>
    </>
  );
};
export default FormularioFrota;


