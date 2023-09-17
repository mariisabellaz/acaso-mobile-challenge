import * as yup from 'yup';

export const schema = yup.object().shape({
  confirmation_code: yup.string().required('Código é obrigatório'),
});
