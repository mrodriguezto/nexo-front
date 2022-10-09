import yup from 'common/utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const basicInfoResolver = yupResolver(
  yup.object({
    display_name: yup.string().required().min(2).max(50),
    title: yup.string().required().min(2).max(50),
    location: yup.string().required('Ingresa tu ubicación').min(2).max(80),
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
