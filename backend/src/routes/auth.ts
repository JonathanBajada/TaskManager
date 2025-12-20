// This file exposes authentication-related HTTP endpoints and wires them to controllers
import { Router } from 'express';
import { login, register, logout } from '../controllers';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

export default router;
