import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

interface IFindAvailableCarsParams {
  name?: string;
  brand?: string;
  category_id?: string;
}

class ListAvailableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IFindAvailableCarsParams = request.query;

    const listCarsUseCase = container.resolve(ListAvailableCarsUseCase);
    const cars = await listCarsUseCase.execute(data);

    return response.json(cars);
  }
}

export { ListAvailableCarsController };
