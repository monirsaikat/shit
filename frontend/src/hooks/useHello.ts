import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export function useHello() {
  return useQuery({
    queryKey: ["hello"],
    queryFn: api.hello,
  });
}
