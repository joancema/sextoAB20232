import { CustomerEntity } from '../../entities/customer.entity';
import { CustomerRepository } from '../../repositories/customer.repository';


export interface GetCustomersUseCase {
  execute(): Promise<CustomerEntity[]>
}


export class GetCustomers implements GetCustomersUseCase {
  
  constructor(
    private readonly repository: CustomerRepository,
  ) {}
  
  execute(): Promise<CustomerEntity[]> {
    return this.repository.getAll();
  }

}

