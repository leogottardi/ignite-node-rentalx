import { AppError } from '@errors/AppError';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

interface IRequest {
  id_car: string;
  id_specification: string;
}

class CreateCarSpecificationUseCase {
  constructor(private carsRepository: ICarsRepository) {}
  async execute({ id_car, id_specification }: IRequest): Promise<void> {
    const car = await this.carsRepository.findById(id_car);

    if (!car) {
      throw new AppError('Car not found');
    }
    return;
  }
}

export { CreateCarSpecificationUseCase };
