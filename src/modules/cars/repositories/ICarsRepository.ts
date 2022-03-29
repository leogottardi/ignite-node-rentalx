import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { IFindAvailableCarDTO } from '../dtos/IFindAvailableCarDTO';
import { IUpdateCarDTO } from '../dtos/IUpdateCarDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(data: IFindAvailableCarDTO): Promise<Car[]>;
  findById(id: string): Promise<Car>;
  updateAvailable(id: string, available: boolean): Promise<void>;
}

export { ICarsRepository };
