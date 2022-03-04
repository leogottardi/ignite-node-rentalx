import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

class CarsRepository implements ICarsRepository {
  create(data: ICreateCarDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
