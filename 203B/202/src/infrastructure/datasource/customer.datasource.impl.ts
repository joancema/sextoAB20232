import { prisma } from '../../data/postgres';
import { CreateCustomerDto, CustomerDatasource, CustomerEntity, UpdateCustomerDto } from '../../domain';




export class CustomerDatasourceImpl implements CustomerDatasource {

  async create( createCustomerDto: CreateCustomerDto ): Promise<CustomerEntity> {
    const { vehicles, ...rest } =  createCustomerDto
    const customer = await prisma.customer.create({
      data: rest
    });

    return CustomerEntity.fromObject( customer );
  }

  async getAll(): Promise<CustomerEntity[]> {
    const customers = await prisma.customer.findMany();
    return customers.map( customer => CustomerEntity.fromObject(customer) );
  }

  async findById( id: number ): Promise<CustomerEntity> {
    const customer = await prisma.customer.findFirst({
      where: { id }
    });

    if ( !customer ) throw `Customer with id ${ id } not found`;
    return CustomerEntity.fromObject(customer);
  }

  async updateById( updateCustomerDto: UpdateCustomerDto ): Promise<CustomerEntity> {
    await this.findById( updateCustomerDto.id );
    
    const updatedCustomer = await prisma.customer.update({
      where: { id: updateCustomerDto.id },
      data: updateCustomerDto!.values
    });

    return CustomerEntity.fromObject(updatedCustomer);
  }

  async deleteById( id: number ): Promise<CustomerEntity> {
    await this.findById( id );
    const deleted = await prisma.customer.delete({
      where: { id }
    });

    return CustomerEntity.fromObject( deleted );
  }

}