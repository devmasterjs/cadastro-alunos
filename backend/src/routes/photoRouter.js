import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multerConfig';
import PhotoController from '../controller/PhotoController';

const uploadMiddleware = multer(multerConfig);

const router = new Router();
router.post('/', uploadMiddleware.single('photo'), PhotoController.store);

export default router;
