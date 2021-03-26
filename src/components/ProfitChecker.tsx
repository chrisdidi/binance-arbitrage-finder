import { useContext, useState } from "react";
import { TickerResult } from "../apis/types";
import { configStore } from "../context/configStore";
import ProfitContainer from "./ProfitContainer";
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
      <h1 className="title">Selected Pairs</h1>
      <div className=" w-full grid gap-2 grid-cols-3">
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
      <h1 className="title mt-3">Detected Profits</h1>
      {pair1Ticker?.ticker && pair2Ticker?.ticker && pair3Ticker?.ticker && (
        <ProfitContainer
          tickers={{
            ticker1: pair1Ticker.ticker,
            ticker2: pair2Ticker.ticker,
            ticker3: pair3Ticker.ticker,
          }}
        />
      )}
      <h1 className="title mt-3">Parameters</h1>
      <p className="description">
        This is where you can adjust your parameters. <br />
        e.g. Setting a higher selling margin will result in better profit, but
        will increase the risk of your execution as the order might not be
        traded immediately.
      </p>
    </div>
  );
};

export default ProfitChecker;
