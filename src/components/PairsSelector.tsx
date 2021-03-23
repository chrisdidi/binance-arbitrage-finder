import React, { useCallback, useEffect, useState } from "react";
import Binance from "../apis/binance";
import { SymbolProps } from "../types/general";
import Selector from "./common/selector";

interface DataProps {
  loading: boolean;
  symbols?: SymbolProps[] | null;
  error?: any;
}
const PairsSelector = () => {
  const [data, setData] = useState<DataProps>({
    loading: true,
    symbols: null,
  });

  const getMarketInfo = useCallback(async () => {
    let marketInfo = await Binance().getExchangeInfo();
    setData({
      loading: false,
      ...marketInfo,
    });
  }, []);
  useEffect(() => {
    if (data.loading && !Boolean(data.symbols)) {
      getMarketInfo();
    }
  }, [data.loading, data.symbols, getMarketInfo]);

  return (
    <div className=" white-box md:max-w-md">
      <h1 className=" title">Select 3 pairs to begin with!</h1>
      <Selector loading={data.loading} label={"Pair 1"} />
      <Selector
        loading={data.loading}
        label={"Pair 2"}
        hint="You must select Pair 1 first."
        disabled={true}
      />
      <Selector
        loading={data.loading}
        disabled={true}
        label={"Pair 3"}
        hint="Pair 3 is auto selected. Select Pair 1 and 2 first."
      />
    </div>
  );
};

export default PairsSelector;
