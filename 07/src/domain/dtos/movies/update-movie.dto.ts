

export class UpdateMovieDto {

    private constructor(
      public readonly id: number,
      public readonly name?: string,
      public readonly genre?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.name ) returnObj.name = this.name;
      if ( this.genre ) returnObj.genre = this.genre;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateMovieDto?]  {
  
      const { id, name, genre } = props;
      let newName =name;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !name && !genre ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateMovieDto(id, name, genre)];
    }
  
  
  }