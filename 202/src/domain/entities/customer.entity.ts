import { VehicleEntity } from "./vehicle.entity";


export class CustomerEntity {

  constructor(
    public id: number,
    public code: string,
    public name: string,
    public address: string,
    public phone: string,
    public vehicles?: VehicleEntity[],
  ) {}

  get Vehicles() {
    return this.vehicles;
  }

  public static fromObject( object: {[key: string]: any} ): CustomerEntity {
    const { id, code, name, address, phone, vehicles } = object;
    if ( !id ) throw 'Id is required';
    if ( !code ) throw 'code is required';
    if ( !name ) throw 'name is required';
    if ( !address ) throw 'address is required';
    if ( !phone ) throw 'phone is required';

      return new CustomerEntity(id, code, name, address, phone, vehicles)
  }

}


