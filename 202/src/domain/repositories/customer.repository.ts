import { CreateCustomerDto, UpdateCustomerDto } from '../dtos';
import { CustomerEntity } from '../entities/customer.entity';



export abstract class CustomerRepository {

  abstract create( createCustomerDto: CreateCustomerDto ): Promise<CustomerEntity>;

  abstract getAll(): Promise<CustomerEntity[]>;

  abstract findById( id: number ): Promise<CustomerEntity>;
  abstract updateById( updateTodoDto: UpdateCustomerDto ): Promise<CustomerEntity>;
  abstract deleteById( id: number ): Promise<CustomerEntity>;

}