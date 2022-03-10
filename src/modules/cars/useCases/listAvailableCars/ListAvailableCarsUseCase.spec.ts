import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory';
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe('List Cars', () => {
  beforeEach(async () => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );

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
    const [car]: Car[] = await listAvailableCarsUseCase.execute({});
    expect(car.available).toBe(true);
  });

  it('should be able to list all available cars by name', async () => {
    const [car]: Car[] = await listAvailableCarsUseCase.execute({
      name: 'Audi name',
    });
    expect(car.name).toBe('Audi name');
  });

  it('should be able to list all available cars by brand', async () => {
    const [car]: Car[] = await listAvailableCarsUseCase.execute({
      brand: 'Audi brand',
    });
    expect(car.brand).toBe('Audi brand');
  });
});
