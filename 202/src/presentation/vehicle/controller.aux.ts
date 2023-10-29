// DDD
import { Request, Response } from 'express';
import { CreateVehicleDto, UpdateVehicleDto } from '../../domain/dtos';
import { VehicleRepository } from '../../domain';


export class VehiclesController {

  //* DI
  constructor(
    private readonly vehicleRepository: VehicleRepository,
  ) { }


  public getVehicles = async ( req: Request, res: Response ) => {
    const vehicles = await this.vehicleRepository.getAll();
    return res.json( vehicles );
  };

  public getVehicleById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const vehicle = await this.vehicleRepository.findById( id );
      res.json( vehicle );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createVehicle = async ( req: Request, res: Response ) => {
    const [ error, createVehicleDto ] = CreateVehicleDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const vehicle = await this.vehicleRepository.create( createVehicleDto! );
    res.json( vehicle );

  };

  public updateVehicle = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateVehicleDto ] = UpdateVehicleDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedVehicle = await this.vehicleRepository.updateById( updateVehicleDto! );
    return res.json( updatedVehicle );

  };


  public deleteVehicle = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedVehicle = await this.vehicleRepository.deleteById( id );
    res.json( deletedVehicle );

  };



}