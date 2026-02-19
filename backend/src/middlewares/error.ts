import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error("🔥 Error:", err);

  const status = (err as any)?.statusCode ?? 500;
  const message = (err as any)?.message ?? "Internal Server Error";

  res.status(status).json({ status: "error", message });
};
