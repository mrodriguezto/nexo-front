import yup from 'common/utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const basicInfoResolver = yupResolver(
  yup.object({
    display_name: yup.string().min(2).max(40).required(),
    title: yup.string().min(2).max(40).required(),
    location: yup.string().min(2).max(80).required('Ingresa tu ubicación'),
    birthday: yup
      .date()
      .max(new Date(), 'Introduce una fecha válida')
      .required('Ingresa una fecha'),
  }),
);
