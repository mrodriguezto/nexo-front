import yup from 'common/utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const registerResolver = yupResolver(
  yup.object({
    firstname: yup.string().min(2).max(50).required('Ingresa tu nombre'),
    lastname: yup.string().min(2).max(50).required('Ingresa tu apellido'),
    email: yup.string().email().max(50).required('Ingresa tu correo'),
    password: yup
      .string()
      .min(8)
      .max(30)
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])/,
        'Contraseña debe tener al menos una mayúscula',
      )
      .required('Ingresa tu clave'),
  }),
);

export const loginResolver = yupResolver(
  yup.object({
    email: yup.string().email().max(50).required('Ingresa tu correo'),
    password: yup
      .string()
      .min(8)
      .max(30)
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])/,
        'Contraseña debe tener al menos una mayúscula',
      )
      .required('Ingresa tu clave'),
  }),
);
