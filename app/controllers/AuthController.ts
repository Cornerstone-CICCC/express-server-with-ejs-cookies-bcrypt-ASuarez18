import express from 'express';

import { createUser, findUserByUsername } from '../models/User.js';


export const registerUser = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      // return res.status(400).json({ error: "Email and password are required" });
      return;
    }
    const user = createUser({ email, password });
    res.redirect("/login");
  } catch (err) {
    // return res.status(500).json({ error: err });
    return;
  }
}


export const loginUser = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const user = findUserByUsername(email);
    if (!user) {
      // return res.status(404).json({ error: "User not found" });
      return res.redirect("/");
    }
    if (user.password !== password) {
      // return res.status(401).json({ error: "Invalid password" });
      res.redirect("/");
    }
    res.redirect("/");
  } catch (err) {
    // return res.status(500).json({ error: err });
    res.redirect("/");
  }
}