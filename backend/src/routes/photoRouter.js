import { Router } from 'express';
import PhotoController from '../controller/PhotoController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();
router.post('/', loginRequired, PhotoController.store);

export default router;
