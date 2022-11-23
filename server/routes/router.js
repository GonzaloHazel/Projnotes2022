// Importando los tramos de rutas
import homeRouter from '../domains/home/homeRouter';
import projectRouter from '../domains/project/projectRouter';
// Funcion de enrutado
const addRoutes = (app) => {
  // agregando enrutado de Home
  app.use('/', homeRouter);
  app.use('/project', projectRouter);
};

export default { addRoutes };
