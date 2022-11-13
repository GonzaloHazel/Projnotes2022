// creando los Acction Methods
// GET "/"
// Get "/Index"

const home = (req, res) => {
  // 1.Generando un view Model
  const viewModel = {
    title: 'Express',
    author: 'Gonzalo Hazel',
  };
  // 2. Mandamos a generar la vista con el template engine
  res.render('home/home', viewModel);
};

const about = (req, res) => {
  const viewModel = {
    title: 'About',
    Content: 'Aceca de Materialize',
  };
  res.render('home/about', viewModel);
};

// Exportando el Controlador
export default { home, about };
