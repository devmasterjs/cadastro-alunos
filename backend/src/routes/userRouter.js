import { Router } from 'express';
import UserController from '../controller/UserController';

const router = new Router();
router.post('/', UserController.create);

export default router;

/*
  index - lista todos os registros - GET
  store/create - cria um novo registros - POST
  delete - apaga um registros - DELETE
  show - mostra um registro - GET
  update - atualiza um registros - PATCH/PUT
*/
