import yup from 'common/utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const basicInfoResolver = yupResolver(
  yup.object({
    display_name: yup.string().min(2).max(50).required(),
    title: yup.string().min(2).max(50).required(),
    location: yup.string().min(2).max(80).required('Ingresa tu ubicación'),
    birthday: yup
      .date()
      .max(new Date(), 'Introduce una fecha válida')
      .required('Ingresa una fecha'),
  }),
);

export const descriptionResolver = yupResolver(
  yup.object({
    description: yup
      .string()
      .min(2)
      .max(800, 'Se ha superado el límite de caracteres')
      .required(),
  }),
);
