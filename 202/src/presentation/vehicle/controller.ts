import { Request, Response } from 'express';
import { CreateVehicleDto, UpdateVehicleDto } from '../../domain/dtos';
import { CreateVehicle, DeleteVehicle, GetVehicle, GetVehicles, VehicleRepository, UpdateVehicle } from '../../domain';


export class VehiclesController {

  //* DI
  constructor(
    private readonly vehicleRepository: VehicleRepository,
  ) { }


  public getVehicles = ( req: Request, res: Response ) => {

    new GetVehicles( this.vehicleRepository )
      .execute()
      .then( vehicles => res.json( vehicles ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getVehicleById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetVehicle( this.vehicleRepository )
      .execute( id )
      .then( vehicle => res.json( vehicle ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createVehicle = ( req: Request, res: Response ) => {
    const [ error, createVehicleDto ] = CreateVehicleDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateVehicle( this.vehicleRepository )
      .execute( createVehicleDto! )
      .then( vehicle => res.json( vehicle ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateVehicle = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateVehicleDto ] = UpdateVehicleDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateVehicle( this.vehicleRepository )
      .execute( updateVehicleDto! )
      .then( vehicle => res.json( vehicle ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteVehicle = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteVehicle( this.vehicleRepository )
      .execute( id )
      .then( vehicle => res.json( vehicle ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 