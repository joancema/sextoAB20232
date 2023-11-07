// DDD
import { Request, Response } from 'express';
import { CreateCustomerDto, UpdateCustomerDto } from '../../domain/dtos';
import { CustomerRepository } from '../../domain';


export class CustomersController {

  //* DI
  constructor(
    private readonly customerRepository: CustomerRepository,
  ) { }


  public getCustomers = async ( req: Request, res: Response ) => {
    const customers = await this.customerRepository.getAll();
    return res.json( customers );
  };

  public getCustomerById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const customer = await this.customerRepository.findById( id );
      res.json( customer );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createCustomer = async ( req: Request, res: Response ) => {
    const [ error, createCustomerDto ] = CreateCustomerDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const customer = await this.customerRepository.create( createCustomerDto! );
    res.json( customer );

  };

  public updateCustomer = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateCustomerDto ] = UpdateCustomerDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedCustomer = await this.customerRepository.updateById( updateCustomerDto! );
    return res.json( updatedCustomer );

  };


  public deleteCustomer = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedCustomer = await this.customerRepository.deleteById( id );
    res.json( deletedCustomer );

  };



}