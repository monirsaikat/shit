import { Router } from "express";
import { prisma } from '../config/db'

export const healthRoute = Router();

healthRoute.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true, db: "up", time: new Date().toISOString() });
  } catch (e) {
    res.status(500).json({ ok: false, db: "down", time: new Date().toISOString() });
  }
});
