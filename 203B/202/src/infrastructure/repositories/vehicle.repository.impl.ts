import { CreateVehicleDto, VehicleDatasource, VehicleEntity, VehicleRepository, UpdateVehicleDto } from '../../domain';


export class VehicleRepositoryImpl implements VehicleRepository {

  constructor(
    private readonly datasource: VehicleDatasource,
  ) { }


  create( createVehicleDto: CreateVehicleDto ): Promise<VehicleEntity> {
    return this.datasource.create( createVehicleDto );
  }

  getAll(): Promise<VehicleEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<VehicleEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateVehicleDto: UpdateVehicleDto ): Promise<VehicleEntity> {
    return this.datasource.updateById( updateVehicleDto );
  }

  deleteById( id: number ): Promise<VehicleEntity> {
    return this.datasource.deleteById( id );
  }

}


