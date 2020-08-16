import { Router } from 'express';
import classesRoutes from './classes.routes';
import connectionRoutes from './connections.routes';
import subjectsRoutes from './subjects.routes';

const router = Router();

const routes = [classesRoutes, connectionRoutes, subjectsRoutes];

routes.map(route => router.use(route.action, route.router));

export default router;
