import { AppError } from '@errors/AppError';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;

describe('Create Car Specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
    );
  });
  it('should be able to add a new specification to the car', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Brand',
      category_id: 'category',
    });
    const id_specification = 'idspecification';
    await createCarSpecificationUseCase.execute({
      id_car: car.id,
      id_specification,
    });
  });

  it('should not be able to add a new specification to the car', async () => {
    expect(async () => {
      const id_car = 'idcar';
      const id_specification = 'idspecification';
      await createCarSpecificationUseCase.execute({ id_car, id_specification });
    }).rejects.toBeInstanceOf(AppError);
  });
});
