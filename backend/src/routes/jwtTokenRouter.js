import { Router } from 'express';
import JwtTokenController from '../controller/JwtTokenController';

const router = new Router();
router.post('/', JwtTokenController.create);

export default router;
