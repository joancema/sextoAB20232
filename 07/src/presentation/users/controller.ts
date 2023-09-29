import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateUserDto, UpdateUserDto } from '../../domain/dtos';


export class UsersController {
  //* DI
  constructor() { }
  public getUsers = async( req: Request, res: Response ) => {
    const users = await prisma.userModel.findMany();
    return res.json( users );
  };
  public getUserById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const user = await prisma.userModel.findFirst({
      where: { id }
    });
    
    ( user )
      ? res.json( user )
      : res.status( 404 ).json( { error: `User with id ${ id } not found` } );
  };
  public createUser = async( req: Request, res: Response ) => {
    
    const [error, createUserDto] = CreateUserDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const user = await prisma.userModel.create({
      data: createUserDto!
    });

    res.json( user );

  };
  public updateUser = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateUserDto] = UpdateUserDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const user = await prisma.userModel.findFirst({
      where: { id }
    });

    if ( !user ) return res.status( 404 ).json( { error: `User with id ${ id } not found` } );

    const updatedUser = await prisma.userModel.update({
      where: { id },
      data: updateUserDto!.values
    });
  
    res.json( updatedUser );

  }
  public deleteUser = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const user = await prisma.userModel.findFirst({
      where: { id }
    });

    if ( !user ) return res.status(404).json({ error: `User with id ${ id } not found` });

    const deleted = await prisma.userModel.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `User with id ${ id } not found` });
    

  }
}