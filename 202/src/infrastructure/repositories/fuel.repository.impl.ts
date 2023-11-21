import { CreateFuelDto, FuelDatasource, FuelEntity, FuelRepository, UpdateFuelDto } from '../../domain';


export class FuelRepositoryImpl implements FuelRepository {

  constructor(
    private readonly datasource: FuelDatasource,
  ) { }


  create( createFuelDto: CreateFuelDto ): Promise<FuelEntity> {
    return this.datasource.create( createFuelDto );
  }

  getAll(): Promise<FuelEntity[]> {
    return this.datasource.getAll();
1  }

  findById( id: number ): Promise<FuelEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateFuelDto: UpdateFuelDto ): Promise<FuelEntity> {
    return this.datasource.updateById( updateFuelDto );
  }

  deleteById( id: number ): Promise<FuelEntity> {
    return this.datasource.deleteById( id );
  }

}


