import { Request, Response } from 'express';
import { CreateCustomerDto, UpdateCustomerDto } from '../../domain/dtos';
import { CreateCustomer, DeleteCustomer, GetCustomer, GetCustomers, CustomerRepository, UpdateCustomer } from '../../domain';


export class CustomersController {

  //* DI
  constructor(
    private readonly customerRepository: CustomerRepository,
  ) { }


  public getCustomers = ( req: Request, res: Response ) => {

    new GetCustomers( this.customerRepository )
      .execute()
      .then( customers => res.json( customers ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getCustomerById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetCustomer( this.customerRepository )
      .execute( id )
      .then( customer => res.json( customer ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createCustomer = ( req: Request, res: Response ) => {
    const [ error, createCustomerDto ] = CreateCustomerDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateCustomer( this.customerRepository )
      .execute( createCustomerDto! )
      .then( customer => res.json( customer ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateCustomer = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateCustomerDto ] = UpdateCustomerDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateCustomer( this.customerRepository )
      .execute( updateCustomerDto! )
      .then( customer => res.json( customer ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteCustomer = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteCustomer( this.customerRepository )
      .execute( id )
      .then( customer => res.json( customer ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 