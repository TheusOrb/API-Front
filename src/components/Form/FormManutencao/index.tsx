import {
  Add,
  Form,
  Input,
  OrganizationButoon,
  OrganizationForm,
  Remove,
} from '../styles';

import { useForm } from 'react-hook-form';
import { useCallback } from 'react';

const FormularioManutencao: React.FC = () => {
  const { register, getValues } = useForm({});

  const addPost = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <>
      <Form onSubmit={() => addPost(getValues())}>
        <OrganizationForm>
          <Input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Placa do Veículo"
            {...register('placa')}
          />
          <Input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Manutenção"
            {...register('manutencao')}
          />
          <Input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Tipo de Manutenção"
            {...register('tipomanutencao')}
          />
        </OrganizationForm>
        <OrganizationForm>
          <Input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Data da Manutenção"
            {...register('datamanutencao')}
          />
          <Input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Data da Proxima Manutenção"
            {...register('proximadata')}
          />
          <Input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Valor da Manutenção"
            {...register('valor')}
          />
        </OrganizationForm>
        <OrganizationButoon>
          <Add type="submit">+</Add>
          <Remove onClick={() => addPost(getValues())}>-</Remove>
        </OrganizationButoon>
      </Form>
    </>
  );
};

export default FormularioManutencao;
