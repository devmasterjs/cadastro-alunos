import { Router } from 'express';
import StudentController from '../controller/StudentController';

const router = new Router();

router.get('/', StudentController.index);

export default router;
