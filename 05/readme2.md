1. hacer  migración luego de agregar este esquema
model movies {
  id        Int     @id @default(autoincrement())
  title     String
  genre     String?
}

2. agregar y migrar los dto



export class CreateMovieDto {

    private constructor(
      public readonly title: string,
      public readonly genre: string,
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateMovieDto?]  {
  
      const { title, genre } = props;
  
      if ( !title ) return ['Title property is required', undefined];
  
  
      return [undefined, new CreateMovieDto(title, genre)];
    }
  
  
  }



export class UpdateMovieDto {

    private constructor(
      public readonly id: number,
      public readonly title?: string,
      public readonly genre?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.title ) returnObj.title = this.title;
      if ( this.genre ) returnObj.genre = this.genre;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateMovieDto?]  {
  
      const { id, title, genre } = props;
      let newTitle =title;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !title && !genre ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateMovieDto(id, title, genre)];
    }
  
  
  }


export * from './movies/create-movie.dto';
export * from './movies/update-movie.dto';

3. agregar controlador 

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
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );
    const movie = await prisma.movies.findFirst({
      where: { id }
    });
    
    ( movie )
      ? res.json( movie )
      : res.status( 404 ).json( { error: `User with id ${ id } not found` } );
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
      : res.status(400).json({ error: `User with id ${ id } not found` });
    

  }
}
4. luego la ruta

import { Router } from 'express';
import { MoviesController } from './controller';


export class MovieRoutes {


  static get routes(): Router {

    const router = Router();

    const movieController = new MoviesController();

    router.get('/', movieController.getMovies );
    router.get('/:id', movieController.getMovieById );
    
    router.post('/', movieController.createMovie );
    router.put('/:id', movieController.updateMovie );
    router.delete('/:id', movieController.deleteMovie );


    return router;
  }


}

5. por Ultimo en la ruta general debe agregarse MovieRoutes

import { Router } from 'express';

import { TodoRoutes,  } from './todos/routes';
import {  UserRoutes  } from './users/routes';
import { MovieRoutes  } from './movies/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/todos', TodoRoutes.routes );
    router.use('/api/users', UserRoutes.routes );
    router.use('/api/movies', MovieRoutes.routes );
    
    return router;
  }


}

