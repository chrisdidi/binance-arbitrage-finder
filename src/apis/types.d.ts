import { SymbolProps } from "../types/general";

export type MarketInfoResult = {
  symbols?: SymbolProps[];
  error?: any;
};

export type TickerProps = {
  bestBid: number;
  bestBidQnt: number;
  bestAsk: number;
  bestAskQnt: number;
};

export type TickerResult = {
  loading?: boolean;
  ticker?: TickerProps;
  error?: any;
  isClosed?: boolean;
};

export type ProfitCalculatorProps = {
  ticker1: TickerProps;
  ticker2: TickerProps;
  ticker3: TickerProps;
};

export type ProfitCalculatorResult = {
  left: number;
  right: number;
};
