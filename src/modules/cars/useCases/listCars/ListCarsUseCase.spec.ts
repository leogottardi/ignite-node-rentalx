import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory';
import { ListCarsUseCase } from './ListCarsUseCase';

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let listCarsUseCase: ListCarsUseCase;

describe('List Cars', () => {
  beforeEach(async () => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);

    await categoriesRepositoryInMemory.create({
      name: 'Category Audi',
      description: 'Category description audi',
    });

    const [category] = await categoriesRepositoryInMemory.list();

    await carsRepositoryInMemory.create({
      name: 'Audi name',
      brand: 'Audi brand',
      daily_rate: 100,
      fine_amount: 100,
      description: 'Audi description',
      license_plate: 'ABC-123',
      category_id: category.id,
    });
  });

  it('should be able to list all available cars', async () => {
    const [car]: Car[] = await listCarsUseCase.execute();

    expect(car.available).toBe(true);
  });

  it('should be able to list all available cars by name', async () => {});
});
