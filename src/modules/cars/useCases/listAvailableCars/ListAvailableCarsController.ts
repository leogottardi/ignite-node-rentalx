import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAvailableCarsUseCase } from './ListAvailableUseCase';
import { IFindAvailableCarDTO } from '../../dtos/IFindAvailableCarDTO';

class ListAvailableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IFindAvailableCarDTO = request.query;

    const listCarsUseCase = container.resolve(ListAvailableCarsUseCase);
    const cars = await listCarsUseCase.execute(data);

    return response.json(cars);
  }
}

export { ListAvailableCarsController };
