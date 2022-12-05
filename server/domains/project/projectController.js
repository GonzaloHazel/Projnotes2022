const list = (req, res) => {
  const viewModel = {};
  res.render('project/list', viewModel);
};

const showAddForm = (req, res) => {
  const viewModel = {};
  res.render('project/add', viewModel);
};

// POST "/project/add"
// POST "/project/create"
const addProject = (req, res) => {
  // Rescatando la info del formulario
  const { validData, errorData: error } = req;
  let project = {};
  let errorModel = {};
  // Desesctructurando y renombrando error de datos
  // Verificando si hay error de validación
  if (error) {
    // Rescatar los datos del formlario
    project = error.value;
    // Quiero generar un objeto que contenga
    // los campos con error y sus errores
    errorModel = error.inner.reduce((prev, curr) => {
      // Creabdo una variable temporal donde
      // guardare el elemento anterior
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
  } else {
    // Si los datos del formulario fueron validos
    // Se asignan a project
    project = validData;
  }
  // Contestando los datos del proyecti
  res.status(200).render('project/add', { project, errorModel });
};

export default { list, showAddForm, addProject };
