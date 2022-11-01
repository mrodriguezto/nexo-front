import yup from 'common/utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const descResolver = yupResolver(
  yup.object({
    title: yup
      .string()
      .required('Es necesario que ingreses un título')
      .min(2, 'El título es muy corto')
      .max(50, 'El título no puede exceder los 50 caracteres'),
    description: yup
      .string()
      .min(2, 'La descripción es muy corta')
      .max(800, 'Se ha superado el límite de caracteres'),
  }),
);

export const extraInfoResolver = yupResolver(
  yup.object({
    tags: yup.array().required().of(yup.string()).min(1).max(5),
    location: yup.string().required('Ingresa tu ubicación').min(2).max(80),
    expiration_date: yup
      .date()
      .min(
        new Date(),
        'La fecha de vencimiento no puede ser anterior a la fecha de publicación',
      )
      .max(
        new Date(Date.now() + 7.884e9),
        'No se puede elegir una fecha que exceda los 3 meses',
      )
      .required('Ingresa una fecha'),
  }),
);
