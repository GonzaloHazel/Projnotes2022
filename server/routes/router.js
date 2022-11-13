// Importando los tramos de rutas
import homeRouter from '../domains/home/homeRouter';

// Funcion de enrutado
const addRoutes = (app) => {
  // agregando enrutado de Home
  app.use('/', homeRouter);
};

export default { addRoutes };
