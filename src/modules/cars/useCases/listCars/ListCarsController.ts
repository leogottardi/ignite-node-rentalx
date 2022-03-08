import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCarsUseCase } from './ListCarsUseCase';
import { IFindAvailableCarDTO } from '../../dtos/IFindAvailableCarDTO';

class ListCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IFindAvailableCarDTO = request.query;

    const listCarsUseCase = container.resolve(ListCarsUseCase);
    const cars = await listCarsUseCase.execute(data);

    return response.status(200).json(cars);
  }
}

export { ListCarsController };
