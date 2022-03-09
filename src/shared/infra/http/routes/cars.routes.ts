import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createCarController = new CreateCarController();
const listCarsController = new ListAvailableCarsController();
const carsRoutes = Router();

carsRoutes.use(ensureAuthenticated, ensureAdmin);

carsRoutes.post('/', createCarController.handle);
carsRoutes.get('/', listCarsController.handle);

export { carsRoutes };
