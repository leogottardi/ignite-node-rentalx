import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { IFindAvailableCarDTO } from '@modules/cars/dtos/IFindAvailableCarDTO';
import { IUpdateCarDTO } from '@modules/cars/dtos/IUpdateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { getRepository, Repository } from 'typeorm';
import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }
  async updateAvailable(id: string, available: boolean): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ available })
      .where('id = :id')
      .setParameters({ id })
      .execute();
  }

  findById(id: string): Promise<Car> {
    return this.repository.findOne({ id });
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create(data);

    return this.repository.save(car);
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.repository.findOne({ license_plate });
  }

  async findAvailable(data: IFindAvailableCarDTO): Promise<Car[]> {
    return this.repository.find({
      ...data,
      available: true,
    });
  }
}

export { CarsRepository };
