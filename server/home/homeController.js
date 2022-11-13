// creando los Acction Methods
// GET "/"
// Get "/Index"
const Acctions = {
  home: (req, res) => {
    // 1.Generando un view Model
    const viewModel = {
      title: 'Express',
      author: 'Gonzalo Hazel',
    };
    // 2. Mandamos a generar la vista con el template engine
    res.render('home', viewModel);
  },

  about: (req, res) => {
    const viewModel = {
      title: 'About',
      Content: 'contenido de about',
    };
    res.render('about', viewModel);
  },
};
// Exportando el Controlador
export default { Acctions };
