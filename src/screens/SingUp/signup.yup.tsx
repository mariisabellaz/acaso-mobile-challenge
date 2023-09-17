import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().required('Email é obrigatório').email('Email inválido'),
  first_name: yup.string().required('Primeiro nome é obrigatório'),
  last_name: yup.string().required('Último nome é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve conter no mínimo 6 caracteres')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)/, 'Senha deve conter pelo menos uma letra e um número'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem coincidir')
    .required('Confirme sua senha é obrigatório')
    .nullable(),
});
