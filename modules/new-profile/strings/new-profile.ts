const newProfilePage = {
  title: 'Crea tu perfil',
  description:
    'Permítenos conocerte a profundidad para ofrecerte información que te interese.',
  next_btn: 'Siguiente',
  finish_btn: 'Finalizar',
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
  upload_image: {
    aria: 'Subir imagen de perfil',
    success: 'Cargado exitosamente',
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

const disciplinesContent = {
  title: 'Dile al mundo cuáles son tus principales disciplinas artísticas',
  info: 'Estas pueden ser aquellas que más te apasionen, con la que más te identifiques o de las que provenga tu mayor fuente de ingreso.',
  auto_complete_label: 'Escribe o seleciona tus principales oficios',
  info_max: '3 máx.',
  next_step_btn: 'Siguiente',
};

const disciplinesSideinfo = {
  next_btn: 'Siguiente',
};

const keywordsContent = {
  title: '¿Qué palabras claves definen tu arte?',
  info: 'Estas palabras pueden ser disciplinas o subdisciplinas artísticas , estilos de danza, instrumentos musicales, etc.',
  placeholder: 'Escribe o seleciona tus palabras clave',
  info_max: '6 máx.',
  next_step_btn: 'Siguiente',
  popover_title: 'NEXO TIP',
  popover_text:
    'Las palabras claves ayudarán a que otros artistas te encuentren más  fácilmente y que podamos sugerirte trabajos idóneos.',
  tags_subtitle: 'Tags sugeridos',
  suggested_tags: [
    'Iluminador técnico',
    'Trabajadora social',
    'Mezzosoprano',
    'Comediante',
  ],
};

const keywordsSideinfo = {
  next_btn: 'Siguiente',
};

const topicsContent = {
  title: 'Muestra que temáticas te apasionan',
  info: 'Las temáticas son aquellos contenidos que te apasionan y suelen estar  presentes en tus presentaciones, composiciones y proyectos artísticos',
  placeholder: 'Escribe o seleciona tus temáticas',
  info_max: '3 máx.',
  next_step_btn: 'Siguiente',
  popover_title: 'NEXO TIP',
  popover_text:
    'Estas palabras ayudarán a que conectes con usuarios que tengan intereses similares a los tuyos y que podamos recomendarte contenido relacionado.',
  tags_subtitle: 'Tags sugeridos',
  suggested_tags: ['Racismo', 'Sátira', 'Política'],
};

const topicsSideinfo = {
  next_btn: 'Siguiente',
};

const descriptionContent = {
  title: '¡Ya casi terminamos! Cuéntale al mundo quién eres',
  info: 'Cuéntale al mundo quién eres. Recuerda comunicarlo de manera clara y concisa ya que esta información aparecerá al inicio de tu perfil. Ayuda a que otros artistas estén interesades en tu trabajo puedan llevarse la mejor impresión de ti.',
  placeholder: 'Escribe un poco sobre ti',
  example_description: `Ej: Hola! Me llamo Adriana Brañez, soy Creadora y Productora escénica egresada de la PUPC con [Experiencia] más de 3 años de experiencia en las áreas de producción, dirección y docencia. [Aspiraciones] Busco desarrollar mi línea de trabajo en la docencia y en la gestión cultural. [Pasiones] Me apasionan los proyectos vinculados a la discapacidad y la comunidad LGTBIQ+. [Actualidad] Actualmente me desempeño como productora escénica en Kinesfera danza.`,
  next_step_btn: 'Siguiente',
};

const descriptionSideinfo = {
  example_lbl: 'Ejemplo:',
  example_username: 'Adriana Brañez',
  example_calification: '4.86',
  example_description: `Ej: Hola! Me llamo Adriana Brañez, soy Creadora y Productora escénica egresada de la PUPC con [Experiencia] más de 3 años de experiencia en las áreas de producción, dirección y docencia. [Aspiraciones] Busco desarrollar mi línea de trabajo en la docencia y en la gestión cultural. [Pasiones] Me apasionan los proyectos vinculados a la discapacidad y la comunidad LGTBIQ+. [Actualidad] Actualmente me desempeño como productora escénica en Kinesfera danza.`,
  next_btn: 'Siguiente',
};

const uploadsContent = {
  title: '¡Por último! Carga las fotos y los vídeos que demuestren tu talento',
  info: 'Puede ser un reel actoral, un video de presentación o de alguna obra en donde hayas participado.',
  uploads: {
    input_lbl: 'Sube fotos y videos',
    type_not_valid: 'El tipo de archivo no es válido',
    success: 'Cargado exitosamente',
  },
  popover: {
    title: 'Ten en cuenta que:',
    desc: `Estas imágenes y videos serán lo primero que las personas verán cuando visiten tu perfil pues van a estar en la parte superior de este.
    ¡No te preocupes! Si estás indecisx con la elección de las imágenes y los videos, recuerda que lo puedes hacer luego.`,
  },
  do_later_link: 'Lo haré después',
  next_step_btn: 'Siguiente',
};

const uploadsSideinfo = {
  title: 'Ten en cuenta que:',
  desc: `Estas imágenes y videos serán lo primero que las personas verán cuando visiten tu perfil pues van a estar en la parte superior de este.
  ¡No te preocupes! Si estás indecisx con la elección de las imágenes y los videos, recuerda que lo puedes hacer luego.`,
  next_btn: 'Siguiente',
};

export {
  newProfilePage,
  beginContent,
  basicInfoContent,
  basicInfoSideinfo,
  disciplinesContent,
  disciplinesSideinfo,
  keywordsContent,
  keywordsSideinfo,
  topicsContent,
  topicsSideinfo,
  descriptionContent,
  descriptionSideinfo,
  uploadsContent,
  uploadsSideinfo,
};
