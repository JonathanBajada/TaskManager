import { Router } from 'express';
import healthRouter from './health';

const router = Router();

router.use('/health', healthRouter);

// TODO: Add more route modules here
// router.use('/auth', authRouter);
// router.use('/users', usersRouter);
// router.use('/tasks', tasksRouter);

export default router;

