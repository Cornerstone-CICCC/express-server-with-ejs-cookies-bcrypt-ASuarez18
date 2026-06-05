import express from 'express';

import { registerUser, loginUser, logoutUser } from '../controllers/AuthController.js';

import { requireAuth } from '../middlewares/requireAuth.ts';

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", requireAuth, logoutUser);

export default router;