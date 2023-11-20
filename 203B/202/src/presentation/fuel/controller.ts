import { Request, Response } from 'express';
import { CreateFuelDto, UpdateFuelDto } from '../../domain/dtos';
import { CreateFuel, DeleteFuel, GetFuel, GetFuels, FuelRepository, UpdateFuel } from '../../domain';


export class FuelsController {

  //* DI
  constructor(
    private readonly fuelRepository: FuelRepository,
  ) { }


  public getFuels = ( req: Request, res: Response ) => {

    new GetFuels( this.fuelRepository )
      .execute()
      .then( fuels => res.json( fuels ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getFuelById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetFuel( this.fuelRepository )
      .execute( id )
      .then( fuel => res.json( fuel ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createFuel = ( req: Request, res: Response ) => {
    const [ error, createFuelDto ] = CreateFuelDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateFuel( this.fuelRepository )
      .execute( createFuelDto! )
      .then( fuel => res.json( fuel ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateFuel = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateFuelDto ] = UpdateFuelDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateFuel( this.fuelRepository )
      .execute( updateFuelDto! )
      .then( cfuel => res.json( cfuel ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteFuel = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteFuel( this.fuelRepository )
      .execute( id )
      .then( fuel => res.json( fuel ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 