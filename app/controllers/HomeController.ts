import express from 'express';

export const index = (req: express.Request, res: express.Response) => {
  res.render("pages/index", { tabTitle: "Home Page" });
}

export const login = (req: express.Request, res: express.Response) => {
  res.render("pages/login", { tabTitle: "Login" });
}

export const dashboard = (req: express.Request, res: express.Response) => {
  const userEmail = req.session?.email || "User";

  res.render("pages/dashboard", {
    tabTitle: "Dashboard",
    email: userEmail
  });
};