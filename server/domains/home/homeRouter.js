// Importando el Router de Express
import { Router } from 'express';
// Importando el Controlador
import homeController from './homeController';
// Creando un instancia del entrutador
const router = new Router();

// Enrutamos
// GET '/'
// GET '/Home'
// Get '/index'
router.get(['/', '/home', '/index'], homeController.home);
router.get('/about', homeController.about);

// Exporto este tramo de ruta
export default router;
