const resetPasswordPage = {
  title: 'Recuperar cuenta',
  description: 'Recupera tu cuenta ingresando tu correo',
  enterEmailContent: {
    title: 'Recuperar mi clave',
    info: 'Ingresa tu correo, te enviaremos un enlace de recuperación',
    go_back_btn: 'Volver al inicio',
  },
  emailSentContent: {
    title: 'Correo enviado',
    info: 'Te hemos enviado un correo de recuperación de contraseña al correo:',
    info2: 'Si tienes problemas con el correo',
    resend_btn: 'Reenviar enlace',
  },
};

const enterEmailForm = {
  inputs: {
    email_lbl: 'Correo electrónico',
  },
  btns: {
    send_link: 'Enviar enlace',
  },
};

const newPasswordPage = {
  title: 'Recuperar cuenta',
  description: 'Recupera tu cuenta cambiando tu contraseña',
  newPasswordContent: {
    title: 'Recuperar mi clave',
    info: 'Elige una nueva contraseña para ingresar a tu cuenta',
  },
  resetCompletedContent: {
    title: 'Se cambió tu clave',
    info: 'La función está a punto de empezar, revisa tu bandeja de correo para confirmar tu cuenta.',
    access_btn: 'Ingresar',
  },
};

const newPasswordForm = {
  inputs: {
    new_password_lbl: 'Nueva contraseña',
    confirm_password_lbl: 'Confirmar contraseña',
  },
  btns: {
    change_password: 'Cambiar contraseña',
  },
};

export { resetPasswordPage, enterEmailForm, newPasswordPage, newPasswordForm };
