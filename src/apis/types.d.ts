import { SymbolProps } from "../types/general";

export type MarketInfoResult = {
  symbols?: SymbolProps[];
  error?: any;
};

export type TickerProps = {
  bestBid: string;
  bestBidQnt: string;
  bestAsk: string;
  bestAskQnt: string;
};

export type TickerResult = {
  loading?: boolean;
  ticker?: TickerProps;
  error?: any;
  isClosed?: boolean;
};
