import { CreateVehicleDto, UpdateVehicleDto } from '../dtos';
import { VehicleEntity } from '../entities/vehicle.entity';



export abstract class VehicleDatasource {

  abstract create( createVehicleDto: CreateVehicleDto ): Promise<VehicleEntity>;

  abstract getAll(): Promise<VehicleEntity[]>;

  abstract findById( id: number ): Promise<VehicleEntity>;
  abstract updateById( updateVehicleDto: UpdateVehicleDto ): Promise<VehicleEntity>;
  abstract deleteById( id: number ): Promise<VehicleEntity>;

}