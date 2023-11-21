export class UpdateFuelDto {

    private constructor(
      public readonly id: number,
      public readonly description?: string,
      public readonly price?: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.description ) returnObj.code = this.description;
      if ( this.price ) returnObj.detail = this.price;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateFuelDto?]  {
  
      const { id,  description, price } = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !description && !price) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateFuelDto(id, description, price)];
    }
  
  
  }