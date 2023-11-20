import { prisma } from '../../data/postgres';
import { CreateFuelDto, FuelDatasource, FuelEntity, UpdateFuelDto } from '../../domain';




export class FuelDatasourceImpl implements FuelDatasource {

  async create( createFuelDto: CreateFuelDto ): Promise<FuelEntity> {
    const fuel = await prisma.fuel.create({
      data: createFuelDto!
    });

    return FuelEntity.fromObject( fuel );
  }

  async getAll(): Promise<FuelEntity[]> {
    const fuels = await prisma.fuel.findMany();
    return fuels.map( fuel => FuelEntity.fromObject(fuel) );
  }

  async findById( id: number ): Promise<FuelEntity> {
    const fuel = await prisma.fuel.findFirst({
      where: { id }
    });

    if ( !fuel ) throw `Fuel with id ${ id } not found`;
    return FuelEntity.fromObject(fuel);
  }

  async updateById( updateFuelDto: UpdateFuelDto ): Promise<FuelEntity> {
    await this.findById( updateFuelDto.id );
    
    const updatedFuel = await prisma.fuel.update({
      where: { id: updateFuelDto.id },
      data: updateFuelDto!.values
    });

    return FuelEntity.fromObject(updatedFuel);
  }

  async deleteById( id: number ): Promise<FuelEntity> {
    await this.findById( id );
    const deleted = await prisma.fuel.delete({
      where: { id }
    });

    return FuelEntity.fromObject( deleted );
  }

}