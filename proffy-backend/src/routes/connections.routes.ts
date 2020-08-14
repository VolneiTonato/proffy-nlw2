import { Router } from 'express';
import ConnectionController from '../controllers/ConnectionsController';
import { ValidationMiddleware } from '../midlewares/validators';
import { ValidateCreateConnection } from '../midlewares/validators/connection.validator';

const connectionController = new ConnectionController();

const router = Router();

router.route('/').get(connectionController.index);
router
    .route('/')
    .post(ValidationMiddleware(ValidateCreateConnection()))
    .post(connectionController.create);

export default {
    action: '/connections',
    router,
};
