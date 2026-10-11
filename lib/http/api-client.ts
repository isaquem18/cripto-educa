import axios from "axios";

const REQUEST_TIMEOUT_MS = 15_000;

export type ApiErrorBody = {
  error: string;
  details?: unknown;
};

export const apiClient = axios.create({
  baseURL: "/api",
  timeout: REQUEST_TIMEOUT_MS,
  headers: { "Content-Type": "application/json" },
});

export function getApiErrorMessage(error: unknown, fallback = "Something went wrong. Please try again.") {
  if (axios.isAxiosError<ApiErrorBody>(error)) {
    return error.response?.data?.error ?? error.message ?? fallback;
  }
  return error instanceof Error ? error.message : fallback;
}
