import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListCarsController } from '@modules/cars/useCases/listCars/ListCarsController';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();
const carsRoutes = Router();

carsRoutes.use(ensureAuthenticated, ensureAdmin);

carsRoutes.post('/', createCarController.handle);
carsRoutes.get('/', listCarsController.handle);

export { carsRoutes };
