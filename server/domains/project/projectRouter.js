import { Router } from 'express';
import projectController from './projectController';

const router = new Router();

router.get('/add', projectController.showAddForm);
router.get('/', projectController.list);
// POST '/project/add'
router.post(['/add', '/create'], projectController.addProject);

export default router;
