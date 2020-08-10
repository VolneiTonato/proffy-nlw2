import { Router } from 'express';
import {ValidateClassesCreateUserClasseScheduleFilter, ValidateClassesCreateUserClasseScheduleCreate} from '../midlewares/validators/classes.validator'
import {ValidationMiddleware} from '../midlewares/validators'

import ClassesController from '../controllers/ClassesController';

const classeController = new ClassesController()


const router = Router();

router.route('/').get(ValidationMiddleware(ValidateClassesCreateUserClasseScheduleFilter()),classeController.index);
router.route('/all').get(classeController.showAll);
router.route('/').post(ValidationMiddleware(ValidateClassesCreateUserClasseScheduleCreate()), classeController.create);

export default {
  action: '/classes',
  router,
};
