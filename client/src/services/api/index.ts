import { MarketFreeClient } from "@/services/api/market-free";

export {
  ApiError,
  type Item,
  type ItemDetail,
  MarketFreeClient,
} from "@/services/api/market-free";

export const marketFreeClient = new MarketFreeClient(
  process.env.NEXT_PUBLIC_API_URL || ""
);
