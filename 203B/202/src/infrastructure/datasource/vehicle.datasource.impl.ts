import { prisma } from '../../data/postgres';
import { CreateVehicleDto, VehicleDatasource, VehicleEntity, UpdateVehicleDto } from '../../domain';




export class VehicleDatasourceImpl implements VehicleDatasource {

  async create( createVehicleDto: CreateVehicleDto ): Promise<VehicleEntity> {
    const vehicle = await prisma.vehicle.create({
      data: createVehicleDto!
    });

    return VehicleEntity.fromObject( vehicle );
  }

  async getAll(): Promise<VehicleEntity[]> {
    const vehicles = await prisma.vehicle.findMany();
    return vehicles.map( vehicle => VehicleEntity.fromObject(vehicle) );
  }

  async findById( id: number ): Promise<VehicleEntity> {
    const vehicle = await prisma.vehicle.findFirst({
      where: { id }
    });

    if ( !vehicle ) throw `Vehicle with id ${ id } not found`;
    return VehicleEntity.fromObject(vehicle);
  }

  async updateById( updateVehicleDto: UpdateVehicleDto ): Promise<VehicleEntity> {
    await this.findById( updateVehicleDto.id );
    
    const updatedVehicle = await prisma.vehicle.update({
      where: { id: updateVehicleDto.id },
      data: updateVehicleDto!.values
    });

    return VehicleEntity.fromObject(updatedVehicle);
  }

  async deleteById( id: number ): Promise<VehicleEntity> {
    await this.findById( id );
    const deleted = await prisma.vehicle.delete({
      where: { id }
    });

    return VehicleEntity.fromObject( deleted );
  }

}