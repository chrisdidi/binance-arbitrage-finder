import React, { useCallback, useContext, useEffect, useState } from "react";
import Binance from "../apis/binance";
import { configStore } from "../context/configStore";
import { SymbolProps } from "../types/general";
import Button from "./common/button";
import Selector from "./common/selector";

interface DataProps {
  loading: boolean;
  symbols?: SymbolProps[];
  error?: any;
}

interface IProps {
  onShowProfit: any;
  showProfit: boolean;
}
const PairsSelector: React.FC<IProps> = ({ onShowProfit, showProfit }) => {
  const { config, editPair1, editPair2 } = useContext(configStore);
  const [data, setData] = useState<DataProps>({
    loading: true,
  });

  const getMarketInfo = useCallback(async () => {
    let marketInfo = await Binance().getExchangeInfo();
    setData({
      loading: false,
      ...marketInfo,
    });
  }, []);

  const onEditPair1 = (pair: SymbolProps) => {
    if (editPair1) {
      editPair1(pair, data.symbols);
    }
  };

  const onEditPair2 = (pair: SymbolProps) => {
    if (editPair2) {
      editPair2(pair, data.symbols);
    }
  };
  useEffect(() => {
    if (data.loading && !Boolean(data.symbols)) {
      getMarketInfo();
    }
  }, [data.loading, data.symbols, getMarketInfo]);

  return (
    <div className=" white-box md:max-w-md mb-3 md:mb-0 md:mr-3">
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
        onSelect={onEditPair1?.bind(this)}
      />
      <Selector
        placeholder={config.pair1 ? "Select a pair" : "Select pair 1 first."}
        loading={data.loading}
        label={"Pair 2"}
        hint="You must select Pair 1 first."
        disabled={!Boolean(config.pair1)}
        list={config.pair2Options || []}
        onSelect={onEditPair2?.bind(this)}
        forceValue={config.pair2?.symbol}
      />
      <Selector
        placeholder={"This is auto selected."}
        loading={data.loading}
        disabled={true}
        label={"Pair 3"}
        hint="Pair 3 is auto selected. Select Pair 1 and 2 first."
        forceValue={config.pair3?.symbol}
      />
      <div className={"w-full flex justify-end"}>
        <Button
          label={showProfit ? "Close" : "Start"}
          intent="attention"
          disabled={!(config.pair1 && config.pair2 && config.pair3)}
          onClick={onShowProfit}
        />
      </div>
    </div>
  );
};

export default PairsSelector;
