const list = (req, res) => {
  const viewModel = {};
  res.render('project/list', viewModel);
};

const add = (req, res) => {
  const viewModel = {};
  res.render('project/add', viewModel);
};

export default { list, add };
