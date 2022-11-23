import { Router } from 'express';
import projectController from './projectController';

const router = new Router();

router.get('/add', projectController.add);
router.get('/', projectController.list);

export default router;
