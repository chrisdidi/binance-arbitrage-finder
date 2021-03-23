import React, { useCallback, useContext, useEffect, useState } from "react";
import Binance from "../apis/binance";
import { configStore } from "../context/configStore";
import { SymbolProps } from "../types/general";
import Selector from "./common/selector";

interface DataProps {
  loading: boolean;
  symbols?: SymbolProps[] | null;
  error?: any;
}

const PairsSelector: React.FC = () => {
  const { config, editPair1, editPair2 } = useContext(configStore);
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
      <Selector
        placeholder="Select a pair"
        loading={data.loading}
        label={"Pair 1"}
        list={
          data.symbols?.map((a) => {
            return { label: a.symbol, value: a };
          }) || []
        }
        onSelect={editPair1?.bind(this)}
      />
      <Selector
        placeholder={config.pair1 ? "Select a pair" : "Select pair 1 first."}
        loading={data.loading}
        label={"Pair 2"}
        hint="You must select Pair 1 first."
        disabled={!Boolean(config.pair1)}
        list={
          data.symbols?.map((a) => {
            return { label: a.symbol, value: a };
          }) || []
        }
        onSelect={editPair2?.bind(this)}
      />
      <Selector
        placeholder={"This is auto selected."}
        loading={data.loading}
        disabled={true}
        label={"Pair 3"}
        hint="Pair 3 is auto selected. Select Pair 1 and 2 first."
      />
    </div>
  );
};

export default PairsSelector;
