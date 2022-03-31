import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListRentalsByUserUseCase } from './ListRentalsByUserUseCase';

class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<void> {
    const { id } = request.user;
    const listRentalsByUserUseCase = container.resolve(
      ListRentalsByUserUseCase,
    );

    await listRentalsByUserUseCase.execute(id);
  }
}
