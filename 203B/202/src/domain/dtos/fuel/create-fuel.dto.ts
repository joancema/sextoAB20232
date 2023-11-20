
export class CreateFuelDto {
    private constructor(
      public readonly description: string,
      public readonly price: number,
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateFuelDto?]  {
      const { description, price  } = props;
      if ( !description ) return ['Description property is required', undefined];
      if ( !price ) return ['Price property is required', undefined];
      return [undefined, new CreateFuelDto(description,  price)];
    }
  }