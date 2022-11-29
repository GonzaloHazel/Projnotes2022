const list = (req, res) => {
  const viewModel = {};
  res.render('project/list', viewModel);
};

const showAddForm = (req, res) => {
  const viewModel = {};
  res.render('project/add', viewModel);
};

// POST '/project/add'
// POST '/project/create'
const addProject = (req, res) => {
  // extracyendo la informacion del formulario
  const { Title, description } = req.body;
  res.status(200).json({ Title, description });
};

export default { list, showAddForm, addProject };
