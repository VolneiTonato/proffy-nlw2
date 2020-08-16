import { Router } from 'express';
import { ValidateCreate } from '../midlewares/validators/subjects.validator';
import { ValidationMiddleware } from '../midlewares/validators';

import SubjectsController from '../controllers/SubjectsController';

const subjectController = new SubjectsController();

const router = Router();

router.route('/').get(subjectController.index);

router
    .route('/')
    .post(ValidationMiddleware(ValidateCreate()), subjectController.create);

export default {
    action: '/subjects',
    router,
};
