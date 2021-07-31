import { Router } from 'express';
import UserController from '../controller/UserController';

const router = new Router();
router.post('/', UserController.create);
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;

/*
  index - lista todos os registros - GET
  store/create - cria um novo registros - POST
  delete - apaga um registros - DELETE
  show - mostra um registro - GET
  update - atualiza um registros - PATCH/PUT
*/
