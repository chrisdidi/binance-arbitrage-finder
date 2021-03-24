import React, { useContext, useState } from "react";
import { TickerResult } from "../apis/types";
import { configStore } from "../context/configStore";
import Ticker from "./Ticker";

const ProfitChecker = () => {
  const { config } = useContext(configStore);
  const [pair1Ticker, setPair1Ticker] = useState<TickerResult | undefined>();
  const [pair2Ticker, setPair2Ticker] = useState<TickerResult | undefined>();
  const [pair3Ticker, setPair3Ticker] = useState<TickerResult | undefined>();

  if (!(config.pair1 && config.pair2 && config.pair3)) {
    return (
      <div className=" white-box p-4">
        <p>One of the pair was not selected.</p>
      </div>
    );
  }

  return (
    <div className="white-box">
      <h1 className="title">Profit Scanner</h1>
      <div className=" w-full grid grid-cols-1 gap-2 lg:grid-cols-3">
        <Ticker
          pair={config.pair1}
          ticker={pair1Ticker}
          setPairTicker={setPair1Ticker}
        />
        <Ticker
          pair={config.pair2}
          ticker={pair2Ticker}
          setPairTicker={setPair2Ticker}
        />
        <Ticker
          pair={config.pair3}
          ticker={pair3Ticker}
          setPairTicker={setPair3Ticker}
        />
      </div>
    </div>
  );
};

export default ProfitChecker;
