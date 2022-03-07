import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCarUseCase } from './CreateCarUseCase';

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateCarDTO = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute(data);

    return response.status(201).json(car);
  }
}

export { CreateCarController };
