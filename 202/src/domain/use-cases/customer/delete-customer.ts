import { CustomerEntity } from '../../entities/customer.entity';
import { CustomerRepository } from '../../repositories/customer.repository';


export interface DeleteCustomerUseCase {
  execute( id: number ): Promise<CustomerEntity>
}

export class DeleteCustomer implements DeleteCustomerUseCase {
  
  constructor(
    private readonly repository: CustomerRepository,
  ) {}
  
  execute( id: number ): Promise<CustomerEntity> {
    return this.repository.deleteById(id);
  }

}

