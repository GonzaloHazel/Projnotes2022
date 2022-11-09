import exphbs from 'express-handlebars';
import path from 'path';

// app: Instancia de express
export default (app) => {
  // Configurar el motor de plantill de express
  // usando express-handelbars
  // 1. Regirsrar el motor de plantillas
  app.engine(
    'hbs',
    exphbs({
      extname: '.hbs',
      defaultLayout: 'main',
    })
  );

  // 2. Seleccionar el motr de plantillas
  app.set('view engine', 'hbs');
  // 3. Establecer la ruta de las vistas
  app.set('views', path.join(__dirname, '..', 'views'));
  // 4. Retornar la instancia de express
  return app;
};
