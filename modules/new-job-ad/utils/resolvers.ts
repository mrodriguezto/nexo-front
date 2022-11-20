import yup from 'common/utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const descResolver = yupResolver(
  yup.object({
    title: yup
      .string()
      .required('Es necesario que ingreses un título')
      .min(2, 'El título es muy corto')
      .max(75, 'El título no puede exceder los 75 caracteres'),
    description: yup
      .string()
      .min(2, 'La descripción es muy corta')
      .max(2500, 'Se ha superado el límite de caracteres: 2500'),
  }),
);

const THREE_MONTHS_IN_MS = 7776000000;

export const extraInfoResolver = yupResolver(
  yup.object({
    tags: yup.array().of(yup.string()).min(0).max(5),
    location: yup.string().max(80),
    expiration_date: yup
      .date()
      .min(
        new Date(),
        'La fecha de vencimiento no puede ser anterior a la fecha de publicación',
      )
      .max(
        new Date(Date.now() + THREE_MONTHS_IN_MS),
        'No se puede elegir una fecha que exceda los 3 meses',
      ), // 90 days max,
  }),
);
