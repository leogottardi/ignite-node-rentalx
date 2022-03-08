import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createCarController = new CreateCarController();
const carsRoutes = Router();

carsRoutes.use(ensureAuthenticated, ensureAdmin);

carsRoutes.post('/', createCarController.handle);

export { carsRoutes };
