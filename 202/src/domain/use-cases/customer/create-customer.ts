import { CreateCustomerDto } from '../../dtos';
import { CustomerEntity } from '../../entities/customer.entity';
import { CustomerRepository } from '../../repositories/customer.repository';


export interface CreateCustomerUseCase {
  execute( dto: CreateCustomerDto ): Promise<CustomerEntity>
}

// ctrl+ shift + l
export class CreateCustomer implements CreateCustomerUseCase {
  
  constructor(
    private readonly repository: CustomerRepository,
  ) {}
  
  execute( dto: CreateCustomerDto ): Promise<CustomerEntity> {
    return this.repository.create(dto);
  }

}

