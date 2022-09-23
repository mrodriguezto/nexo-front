const registerPage = {
  title: 'Registro',
  description: 'Empieza la experiencia nexo ahora',
  content_title: 'Empieza la experiencia nexo ahora',
};

const registerForm = {
  inputs: {
    firstname_lbl: 'Nombre',
    lastname_lbl: 'Apellido',
    email_lbl: 'Correo electrónico',
    pass_lbl: 'Contraseña',
  },
  btns: {
    google_login: 'Entrar con Google',
    register: 'Registrarme',
  },
  terms: {
    info: 'Al dar clic en REGISTRARME estás aceptando nuestros',
    link: 'Términas y condiciones',
  },
  has_account: {
    info: '¿Ya tienes una cuenta?',
    link: 'Iniciar Sesión',
  },
};

const finishedRegistrationPage = {
  title: 'Registro exitoso',
  description: 'Registro completado',
  content: {
    title: '¡Felicidades! Ya estas registrado',
    info: 'La función está a punto de empezar, revisa tu bandeja de correo para confirmar tu cuenta.',
    begin_btn: 'Empezar',
  },
};

const verifyEmailPage = {
  title: 'Verificación de cuenta',
  description: 'Verifica tu correo electrónico',

  content: {
    title: 'Ya casi terminamos, verifica tu cuenta',
    info1:
      'Hemos enviado un mensaje de confirmación a tu correo, revisa tu bandeja, y haz click en',
    info2: 'Si no recibiste el correo, da click en reenviar',
    email_verification_btn: '"CONFIRMAR"',
    resend_btn: 'Reenviar',
  },
};

export { registerPage, registerForm, finishedRegistrationPage, verifyEmailPage };
