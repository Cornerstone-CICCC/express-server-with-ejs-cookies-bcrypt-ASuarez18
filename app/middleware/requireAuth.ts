import express from "express"; 

export const requireAuth = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  if (!req.session?.username) {
    return res
      .status(401)
      .json({ message: "You are not authorized to view this page" });
  } else {
    next();
  }
};