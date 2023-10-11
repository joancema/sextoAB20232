export class CreateMovieDto {
    private constructor(
      public readonly name: string,
      public readonly genre: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateMovieDto?]  {
  
      const { name, genre } = props;
  
      if ( !name ) return ['name property is required', undefined];
  
  
      return [undefined, new CreateMovieDto(name, genre)];
    }
  }