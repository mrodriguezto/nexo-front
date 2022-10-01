import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: 'Este campo no es válido',
    required: 'Este campo es requerido',
  },
  number: {
    min: 'Ingresa al menos ${min} caracteres',
    max: 'Ingresa como máximo ${max} caracteres',
  },

  string: {
    email: 'Ingresa un email válido',
    min: 'Ingresa al menos ${min} caracteres',
    max: 'Ingresa como máximo ${max} caracteres',
  },
});

export default yup;
