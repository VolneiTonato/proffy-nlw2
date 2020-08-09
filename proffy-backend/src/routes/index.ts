import { Router } from 'express';
import classesRoutes from './classes.routes';
import connectionRoutes from './connections.routes'

const router = Router();

const routes = [classesRoutes, connectionRoutes];

routes.map(route => router.use(route.action, route.router));

export default router;
