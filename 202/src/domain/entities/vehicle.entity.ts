



export class VehicleEntity {

    constructor(
      public id: number,
      public code: string,
      public detail: string,
      public customerId: string,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): VehicleEntity {
      const { id, code, detail, customerId } = object;
      if ( !id ) throw 'Id is required';
      if ( !code ) throw 'code is required';
      if ( !detail ) throw 'code is required';
      if ( !customerId ) throw 'Customer ID is required';
  
        return new VehicleEntity(id, code, detail, customerId)
    }
  
  }
  
  
  