import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { carsRoutes } from './cars.routes';
import { categoriesRoutes } from './categories.routes';
import { passwordRoutes } from './password.routes';
import { rentalRoutes } from './rental.routes';
import { specificationRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/specifications', specificationRoutes);
router.use('/categories', categoriesRoutes);
router.use('/password', passwordRoutes);
router.use('/rental', rentalRoutes);
router.use('/users', usersRoutes);
router.use('/cars', carsRoutes);
router.use(authenticateRoutes);

export { router };
