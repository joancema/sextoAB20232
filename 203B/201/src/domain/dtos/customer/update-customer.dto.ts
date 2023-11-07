import { UpdateVehicleDto } from "../vehicle/update-vehicle.dto";


export class UpdateCustomerDto {

    private constructor(
      public readonly id: number,
      public readonly code?: string,
      public readonly name?: string,
      public readonly address?: string,
      public readonly phone?: string,
      public readonly vehicles?: UpdateVehicleDto[],
      
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.code ) returnObj.code = this.code;
      if ( this.name ) returnObj.name = this.name;
      if ( this.address ) returnObj.address = this.address;
      if ( this.phone ) returnObj.phone = this.phone;
      if ( this.vehicles ) returnObj.vehicles = this.vehicles;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateCustomerDto?]  {
  
      const { id, code, name, address, phone, vehicles } = props;
      let newName =name;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !code && !name && !address && !phone && !vehicles) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateCustomerDto(id, code, name, address, phone, vehicles)];
    }
  
  
  }