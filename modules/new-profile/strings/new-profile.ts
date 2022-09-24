const newProfilePage = {
  title: 'Crea tu perfil',
  description:
    'Permítenos conocerte a profundidad para ofrecerte información que te interese.',
};

const beginContent = {
  title: 'Vamos a crear un perfil profesional para ti',
  info: 'Permítenos conocerte a profundidad para ofrecerte información que te interese.',
  begin_btn: 'Comenzar',
};

const basicInfoContent = {
  title: 'Crea tu card de perfil',
  info: 'Agrega tu foto de perfil y llena tus datos básicos',
  inputs: {
    card_name_lbl: 'Nombre en la card*',
    current_title_lbl: 'Título actual*',
    location_lbl: 'Ubicación*',
    bday_lbl: 'Fecha de nacimiento**',
    current_title_popover:
      'Aquí puedes poner tu cargo actual o tu profesión principal',
  },
  next_step_btn: 'Siguiente',
};

const basicInfoSideinfo = {
  profile: {
    name: 'Nombre',
    title: 'Título actual',
    calification: 'calificación',
    location: 'Ubicación',
    contacts: '0',
  },
  btns: {
    next_step: 'Siguiente',
  },
};

export { newProfilePage, beginContent, basicInfoContent, basicInfoSideinfo };
