import { ICreateRentalDTO } from '@modules/rentals/dtos/ICreateRentalDTO';
import { Rental } from '@modules/rentals/infra/typeorm/entities/Rental';
import { IRentalsRepository } from '../IRentalsRepository';

class RentalsRepositoryInMemory implements IRentalsRepository {
  rentals: Rental[] = [];

  async create(data: ICreateRentalDTO): Promise<Rental> {
    const rental = new Rental();

    Object.assign(rental, {
      ...data,
      start_date: new Date(),
    });

    this.rentals.push(rental);

    return rental;
  }

  async findOpenRentalByCarId(car_id: string): Promise<Rental> {
    return this.rentals.find(rental => rental.car_id === car_id);
  }
  async findOpenRentalByUserId(user_id: string): Promise<Rental> {
    return this.rentals.find(rental => rental.user_id === user_id);
  }

  async findById(id: string): Promise<Rental> {
    return this.rentals.find(rental => rental.id === id);
  }

  async findAllRentalsByUser(user_id: string): Promise<Rental[]> {
    return this.rentals.filter(rental => rental.user_id === user_id);
  }
}

export { RentalsRepositoryInMemory };
