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
  // Desesctructurando y renombrando error de datos
  const { errorData: error } = req;
  // Verificando si hay error de validación
  if (error) {
    res.status(200).json(error);
  } else {
    // Desestructurando datos del formulario
    const { validData: projectData } = req;
    // Contestando los datos del proyecti
    res.status(200).json(projectData);
  }
};

export default { list, showAddForm, addProject };
