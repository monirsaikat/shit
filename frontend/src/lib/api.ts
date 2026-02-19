import { http } from "./http";

export type HelloRes = { message: string };

export const api = {
  hello: () => http.get<HelloRes>("/api/v1/hello").then((r) => r.data),
};
