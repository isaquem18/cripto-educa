import { useQuery } from "@tanstack/react-query";
import { exchangeQueries } from "../queries/exchange-queries";

export function useTopExchanges() {
  return useQuery(exchangeQueries.top());
}
