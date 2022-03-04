import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[];

  async create(data: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      ...data,
    });

    this.cars.push(car);
  }
}

export { CarsRepositoryInMemory };
