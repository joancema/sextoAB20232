import { Router } from 'express';
import { CustomersController } from './controller';


export class CustomerRoutes {


  static get routes(): Router {

    const router = Router();

    const customerController = new CustomersController();

    router.get('/', customerController.getCustomers );
    router.get('/:id', customerController.getCustomerById );
    
    router.post('/', customerController.createCustomer );
    router.put('/:id', customerController.updateCustomer );
    router.delete('/:id', customerController.deleteCustomer );


    return router;
  }


}

