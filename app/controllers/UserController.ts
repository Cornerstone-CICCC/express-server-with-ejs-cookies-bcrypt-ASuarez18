import express from "express";

import { getAllUsers } from "../models/User.js";

export const allUsers = (req: express.Request, res: express.Response) => {
  const users = getAllUsers();
  res.status(200).json(users);
};
