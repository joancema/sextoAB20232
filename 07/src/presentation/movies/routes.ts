import { Router } from 'express';
import { MoviesController } from './controller';

export class MovieRoutes {
  static get routes(): Router {
    const router = Router();
    const movieController = new MoviesController();
    router.get('/', movieController.getMovies);
    router.get('/:id', movieController.getMovieById );
    router.post('/', movieController.createMovie );
    router.put('/:id', movieController.updateMovie );
    router.delete('/:id', movieController.deleteMovie );
    return router;
  }
}

