import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListRentalsByUserUseCase {
  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository,
  ) {}

  async execute(user_id: string) {
    const rentals = await this.rentalsRepository.findAllRentalsByUser(user_id);

    return rentals;
  }
}

export { ListRentalsByUserUseCase };
