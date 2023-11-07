import { CreateVehicleDto } from "../vehicle/create-vehicle.dto";

export class CreateCustomerDto {
    private constructor(
      public readonly code: string,
      public readonly name: string,
      public readonly address: string,
      public readonly phone: string,
      public readonly vehicles?: CreateVehicleDto[],
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateCustomerDto?]  {
      const { code, name, address, phone, vehicles } = props;
      if ( !code ) return ['Code property is required', undefined];
      if ( !name ) return ['Code property is required', undefined];
      if ( !address ) return ['Code property is required', undefined];
      if ( !phone ) return ['Code property is required', undefined];
      return [undefined, new CreateCustomerDto(code, name, address, phone, vehicles)];
    }
  }