import { RentalsRepository } from '@modules/rentals/infra/typeorm/repositories/RentalsRepository';
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListRentalsByUserUseCase {
  constructor(
    @inject('RentalRepository')
    private rentalsRepository: IRentalsRepository,
  ) {}

  async execute(user_id: string) {
    const rentals = await this.rentalsRepository.findAllRentalsByUser(user_id);

    return rentals;
  }
}

export { ListRentalsByUserUseCase };
