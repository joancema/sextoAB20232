export class CreateVehicleDto {
    private constructor(
      public readonly code: string,
      public readonly detail: string,
      public readonly customerId: number,
      // public readonly transactions: any[],
      // public readonly transactions: createTransactionDto[],
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateVehicleDto?]  {
      const { code, detail, customerId } = props;
      if ( !code ) return ['Code property is required', undefined];
      if ( !detail ) return ['Detail property is required', undefined];
      if ( !customerId ) return ['Id customer property is required', undefined];
      return [undefined, new CreateVehicleDto(code, detail, customerId)];
    }
  }