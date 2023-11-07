import { UpdateCustomerDto } from '../../dtos';
import { CustomerEntity } from '../../entities/customer.entity';
import { CustomerRepository } from '../../repositories/customer.repository';


export interface UpdateCustomerUseCase {
  execute( dto: UpdateCustomerDto ): Promise<CustomerEntity>
}


export class UpdateCustomer implements UpdateCustomerUseCase {
  
  constructor(
    private readonly repository: CustomerRepository,
  ) {}
  
  execute( dto: UpdateCustomerDto ): Promise<CustomerEntity> {
    return this.repository.updateById(dto);
  }

}

