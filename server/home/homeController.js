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
  res.render('home', viewModel);
};
// Exportando el Controlador
export default { home };
