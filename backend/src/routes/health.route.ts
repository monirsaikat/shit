import { Router } from "express";

export const healthRoute = Router();

healthRoute.get("/health", (_req, res) => {
  res.json({ ok: true, service: "backend", time: new Date().toISOString() });
});
