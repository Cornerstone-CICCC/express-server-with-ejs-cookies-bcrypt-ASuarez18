import express from 'express';

import { index, login } from '../controllers/HomeController.js';

const router = express.Router();

router.get("/", index);

router.get("/login", login);

export default router;