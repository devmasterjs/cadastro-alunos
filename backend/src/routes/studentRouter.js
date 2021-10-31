import { Router } from 'express';
import StudentController from '../controller/StudentController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();

router.get('/', StudentController.index);
router.get('/:id', StudentController.show);
router.post('/:id', loginRequired, StudentController.store);
router.put('/:id', loginRequired, StudentController.update);
router.delete('/:id', loginRequired, StudentController.delete);

export default router;
