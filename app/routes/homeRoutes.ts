import express from 'express';

import { index, login, dashboard } from '../controllers/HomeController.js';

import { requireAuth } from '../middlewares/requireAuth.ts';

const router = express.Router();

router.get("/", index);

router.get("/login", login);

router.get("/dashboard", requireAuth, dashboard);

export default router;