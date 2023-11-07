import { Router } from 'express';
import { CustomersController } from './controller';
import { CustomerDatasourceImpl } from '../../infrastructure/datasource/customer.datasource.impl';
import { CustomerRepositoryImpl } from '../../infrastructure/repositories/customer.repository.impl';


export class CustomerRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new CustomerDatasourceImpl();
    const customerRepository = new CustomerRepositoryImpl( datasource );
    const customerController = new CustomersController(customerRepository);

    router.get('/', customerController.getCustomers );
    router.get('/:id', customerController.getCustomerById );
    
    router.post('/', customerController.createCustomer );
    router.put('/:id', customerController.updateCustomer );
    router.delete('/:id', customerController.deleteCustomer );


    return router;
  }


}

