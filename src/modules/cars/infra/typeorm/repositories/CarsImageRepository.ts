import { ICreateCarImageDTO } from '@modules/cars/dtos/ICreateCarImageDTO';
import { ICarsImageRepository } from '@modules/cars/repositories/ICarsImageRepository';
import { getRepository, Repository } from 'typeorm';
import { CarImage } from '../entities/CarImage';

class CarsImageRepository implements ICarsImageRepository {
  private repository: Repository<CarImage>;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create(data: ICreateCarImageDTO): Promise<CarImage> {
    const car_image = this.repository.create(data);

    await this.repository.save(car_image);

    return car_image;
  }
}
