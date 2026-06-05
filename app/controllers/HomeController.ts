import express from 'express';

export const index = (req: express.Request, res: express.Response) => {
  res.render("pages/index", { tabTitle: "Home Page" });
}

export const login = (req: express.Request, res: express.Response) => {
  res.render("pages/login", { tabTitle: "Login" });
}