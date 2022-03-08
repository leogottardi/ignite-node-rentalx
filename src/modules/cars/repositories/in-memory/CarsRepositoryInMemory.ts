import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { IFindAvailableCarDTO } from '@modules/cars/dtos/IFindAvailableCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      ...data,
      available: true,
    });

    this.cars.push(car);
    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === license_plate);
  }

  async findAvailable({
    brand,
    category_id,
    name,
  }: IFindAvailableCarDTO): Promise<Car[]> {
    const cars = this.cars.filter(car => {
      if (
        car.available &&
        ((name && car.name === name) ||
          (category_id && car.category_id === category_id) ||
          (brand && car.brand === brand))
      ) {
        return car;
      }
    });

    return cars;
  }
}

export { CarsRepositoryInMemory };
