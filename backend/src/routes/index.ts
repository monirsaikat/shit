import { Router } from "express";
import { healthRoute } from "./health.route";
import { apiRoute } from "./api.route";

export const routes = Router();

routes.use(healthRoute);
routes.use("/api/v1", apiRoute); // versioned API
