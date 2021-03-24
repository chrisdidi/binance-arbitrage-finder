import { toast } from "react-toastify";
import { SymbolProps } from "../types/general";
import { MarketInfoResult, TickerProps, TickerResult } from "./types";

const endpoints = {
  base: "https://api.binance.com",
  ws: "wss://stream.binance.com:9443/ws",
};

const Binance = () => {
  const tickerTransform = (m: any): TickerProps => ({
    bestBid: m.b,
    bestBidQnt: m.B,
    bestAsk: m.a,
    bestAskQnt: m.A,
  });

  const getExchangeInfo = async (): Promise<MarketInfoResult> => {
    try {
      const data = await fetch(`${endpoints.base}/api/v3/exchangeInfo`, {
        method: "get",
      });
      const jsonData = await data.json();
      if (!Boolean(jsonData.symbols)) {
        throw new Error(jsonData);
      }
      return {
        symbols: jsonData.symbols,
      };
    } catch (error) {
      return {
        error,
      };
    }
  };

  const wsTicker = (pair: SymbolProps, cb?: (ticker: TickerResult) => any) => {
    let ws = new WebSocket(
      `${endpoints.ws}/${pair.symbol.toLowerCase()}@bookTicker`
    );

    if (cb)
      cb({
        loading: true,
      });
    ws.onopen = () => {
      if (cb) {
        cb({
          loading: true,
        });
      }
    };
    ws.onmessage = (e) => {
      let message = JSON.parse(e.data);
      if (cb) {
        cb({
          loading: false,
          ticker: tickerTransform(message),
        });
      }
    };

    ws.onerror = (error) => {
      if (cb) {
        cb({
          loading: false,
          error: error,
        });
      }
    };
    ws.onclose = () => {
      if (cb) {
        toast.dark(`${pair.symbol} connection closed!`);
        cb({
          loading: false,
          isClosed: true,
        });
      }
    };
    return ws;
  };
  return { getExchangeInfo, wsTicker };
};

export default Binance;
