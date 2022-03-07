import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { Router } from 'express';

const createCarController = new CreateCarController();
const carsRoutes = Router();

carsRoutes.post('/', createCarController.handle);

export { carsRoutes };
