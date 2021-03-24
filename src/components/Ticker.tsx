import React, { useEffect } from "react";
import Binance from "../apis/binance";
import { TickerResult } from "../apis/types";
import { SymbolProps } from "../types/general";
import Spinner from "./common/spinner";

interface IProps {
  pair: SymbolProps;
  ticker?: TickerResult;
  setPairTicker?: (ticker: TickerResult) => any;
}
const Ticker: React.FC<IProps> = ({ pair, setPairTicker, ticker }) => {
  const updateTicker = (tickerResult: TickerResult) => {
    if (setPairTicker) {
      setPairTicker({ ...tickerResult });
    }
  };

  useEffect(() => {
    let ws: any;
    if (ticker?.loading === undefined) {
      ws = Binance().wsTicker(pair, updateTicker);
    }
    return () => {
      if (ws?.close) {
        ws.close();
      }
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className=" p-3 bg-blue-50 rounded-lg">
      <div className=" w-full flex justify-between items-center">
        <h1 className="title">{pair.symbol}</h1>
        {ticker?.loading && <Spinner />}
      </div>
      <div className=" w-full pt-2">
        <p>Best Ask Price:{ticker?.ticker?.bestAsk || "Loading..."}</p>
        <p>Best Bid Price:{ticker?.ticker?.bestBid || "Loading..."}</p>
      </div>
    </div>
  );
};

export default Ticker;
