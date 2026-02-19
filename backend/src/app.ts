import express from "express";
import { corsMw } from "./middlewares/cors";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/error";

export function createApp() {
  const app = express();

  app.use(corsMw);
  app.use(express.json());

  app.use(routes);

  // 404
  app.use((_req, res) => {
    res.status(404).json({ status: "error", message: "Not found" });
  });

  app.use(errorHandler);

  return app;
}
