import { CreateCustomerDto, CustomerDatasource, CustomerEntity, CustomerRepository, UpdateCustomerDto } from '../../domain';


export class CustomerRepositoryImpl implements CustomerRepository {

  constructor(
    private readonly datasource: CustomerDatasource,
  ) { }


  create( createCustomerDto: CreateCustomerDto ): Promise<CustomerEntity> {
    return this.datasource.create( createCustomerDto );
  }

  getAll(): Promise<CustomerEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<CustomerEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateCustomerDto: UpdateCustomerDto ): Promise<CustomerEntity> {
    return this.datasource.updateById( updateCustomerDto );
  }

  deleteById( id: number ): Promise<CustomerEntity> {
    return this.datasource.deleteById( id );
  }

}


