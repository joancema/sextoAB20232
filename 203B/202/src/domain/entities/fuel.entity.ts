



export class FuelEntity {

    constructor(
      public id: number,
      public description: string,
      public price: number,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): FuelEntity {
      const { id, description, price } = object;
      if ( !id ) throw 'Id is required';
      if ( !description ) throw 'description is required';
      if ( !price ) throw 'price is required';
  
        return new FuelEntity(id, description, price)
    }
  
  }
  
  
  