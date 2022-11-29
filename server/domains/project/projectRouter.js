import { Router } from 'express';
import projectController from './projectController';
// Importando factoria de validación
import ValidateFactory from '../../services/validateFactory';
// Importando objeto validador
import projectValidator from './projectValidator';
// Creando una isntancia del enrutador

const router = new Router();

router.get('/add', projectController.showAddForm);
router.get('/', projectController.list);

// POST "/project/add"
router.post(
  ['/add', '/create'],
  ValidateFactory({
    schema: projectValidator.projectSchema,
    getObject: projectValidator.getProject,
  }),
  projectController.addProject
);

export default router;
