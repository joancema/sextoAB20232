import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateMovieDto, UpdateMovieDto } from '../../domain/dtos';


export class MoviesController {
  //* DI
  constructor() { }
  public getMovies = async( req: Request, res: Response ) => {
    const movies = await prisma.movies.findMany();
    return res.json( movies );
  };




  public getMovieById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const movie = await prisma.movies.findFirst({
      where: { id }
    });
    
    ( movie )
      ? res.json( movie )
      : res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
  };




  public createMovie = async( req: Request, res: Response ) => {
    
    const [error, createMovieDto] = CreateMovieDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const movie = await prisma.movies.create({
      data: createMovieDto!
    });

    res.json( movie );

  };



  public updateMovie = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateMovieDto] = UpdateMovieDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const movie = await prisma.movies.findFirst({
      where: { id }
    });
    if ( !movie ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedMovie = await prisma.movies.update({
      where: { id },
      data: updateMovieDto!.values
    });
    res.json( updatedMovie );
  }


  public deleteMovie = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const movie = await prisma.movies.findFirst({
      where: { id }
    });

    if ( !movie ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.movies.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Movie with id ${ id } not found` });
  }
}