import { Router } from 'express';
import { UsersController } from './controller';


export class UserRoutes {


  static get routes(): Router {

    const router = Router();

    const userController = new UsersController();

    router.get('/', userController.getUsers );
    router.get('/:id', userController.getUserById );
    
    router.post('/', userController.createUser );
    router.put('/:id', userController.updateUser );
    router.delete('/:id', userController.deleteUser );


    return router;
  }


}

