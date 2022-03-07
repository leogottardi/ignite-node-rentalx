import { AppError } from '@errors/AppError';
import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}
  async execute(data: ICreateCarDTO): Promise<Car> {
    const carAlreadyExist = await this.carsRepository.findByLicensePlate(
      data.license_plate,
    );

    if (carAlreadyExist) {
      throw new AppError('Car already exists');
    }

    const car = await this.carsRepository.create(data);
    return car;
  }
}

export { CreateCarUseCase };
