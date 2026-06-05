import express from "express";

import { hashPassword, verifyPassword } from "../models/Crypto.ts";

import { createUser, findUserByUsername } from "../models/User.js";

export const registerUser = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const hashedPassword = await hashPassword(password);

    createUser({ email, password: hashedPassword });
    res.redirect("/login");
  } catch (err) {
    return res.status(500).json({ error: "Something wrong happened" });
  }
};

export const loginUser = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) {
      return res.status(401).redirect("/login");
      // return res.status(400).json({ error: "Email and password are required" });
    }

    const user = findUserByUsername(email);
    if (!user) {
      return res.status(401).redirect("/login");
      // return res.status(401).json({ error: "Invalid credentials" });
    }

    const okAuth = await verifyPassword(password, user.password);

    if (!okAuth) {
      return res.status(401).redirect("/login");
      // return res.status(401).json({ error: "Invalid credentials" });
    }

    if (req.session) {
      req.session.email = user.email;
    }

    res.redirect("/");
  } catch (err) {
    return res.status(500).json({ error: "Something wrong happened" });
  }
};

export const logoutUser = (req: express.Request, res: express.Response) => {
  if (req.session) {
    req.session = null;
    return res.redirect("/login");
  }
  res.redirect("/login");
};
