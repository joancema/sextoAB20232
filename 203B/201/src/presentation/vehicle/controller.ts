import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateVehicleDto, UpdateVehicleDto } from '../../domain/dtos';
import { create } from 'domain';


export class VehiclesController {
  //* DI
  constructor() { }
  public getVehicles = async( req: Request, res: Response ) => {
    const vehicles = await prisma.vehicle.findMany();
    return res.json( vehicles );
  };
  public getVehicleById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const vehicle = await prisma.vehicle.findFirst({
      where: { id }
    });
    
    ( vehicle )
      ? res.json( vehicle )
      : res.status( 404 ).json( { error: `Vehicle with id ${ id } not found` } );
  };
  public createVehicle = async( req: Request, res: Response ) => {
    
    const [error, createVehicleDto] = CreateVehicleDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const { ...rest } = createVehicleDto!;
    const vehicle = await prisma.vehicle.create({
      data: rest
    });

    res.json( vehicle );

  };
  public updateVehicle = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateVehicleDto] = UpdateVehicleDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const vehicle = await prisma.vehicle.findFirst({
      where: { id }
    });

    if ( !vehicle ) return res.status( 404 ).json( { error: `Vehicle with id ${ id } not found` } );

    const updatedVehicle = await prisma.vehicle.update({
      where: { id },
      data: updateVehicleDto!.values
    });
  
    res.json( updatedVehicle );

  }
  public deleteVehicle = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const vehicle = await prisma.vehicle.findFirst({
      where: { id }
    });

    if ( !vehicle ) return res.status(404).json({ error: `Vehicle with id ${ id } not found` });

    const deleted = await prisma.vehicle.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Vehicle with id ${ id } not found` });
    

  }
}