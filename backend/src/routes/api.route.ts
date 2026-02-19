import { Router } from "express";

export const apiRoute = Router();

apiRoute.get("/hello", (_req, res) => {
  res.json({ message: "yo from express ts 👋" });
});
