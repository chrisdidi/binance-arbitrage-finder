import React, { createContext, useCallback, useState } from "react";
import { ConfigProps, ParametersProps, SymbolProps } from "../types/general";

const defaultParams = {
  pair1: {
    buyMargin: 1,
    sellMargin: 1,
  },
  pair2: {
    buyMargin: 1,
    sellMargin: 1,
  },
  pair3: {
    buyMargin: 1,
    sellMargin: 1,
  },
};
type UpdateResult = {
  ok: boolean;
  error?: any;
};
type ParametersStateProps = {
  pair1: ParametersProps;
  pair2: ParametersProps;
  pair3: ParametersProps;
};
type SymbolsList = SymbolProps[];

interface ContextProps {
  config: ConfigProps;
  editPair1?: (pair: SymbolProps, symbolOptions?: SymbolsList) => UpdateResult;
  editPair2?: (pair: SymbolProps, symbolOptions?: SymbolsList) => UpdateResult;
  parameters: ParametersStateProps;
  updateParameters?: (parameters: ParametersStateProps) => any;
}

export const configStore = createContext<ContextProps>({
  config: {},
  parameters: defaultParams,
});

const ConfigProvider: React.FC = ({ children }) => {
  const [config, setConfig] = useState<ConfigProps>({});
  const [parameters, setParameters] = useState<ParametersStateProps>(
    defaultParams
  );
  const editPair1 = useCallback(
    (pair: SymbolProps, symbolsOptions?: SymbolsList) => {
      let pair2Options: SymbolProps[] = [];
      if (symbolsOptions) {
        const quoteAssetPairs = symbolsOptions.filter(
          (a) => a.quoteAsset === pair.quoteAsset
        );
        const quoteAssetPairsBaseAssets = quoteAssetPairs.map((a) => {
          return a.baseAsset;
        });
        pair2Options = symbolsOptions.filter(
          (a) =>
            quoteAssetPairsBaseAssets.includes(a.baseAsset) &&
            a.quoteAsset === pair.baseAsset
        );
      }
      setConfig({
        pair1: pair,
        pair2Options: pair2Options.map((a) => {
          return { label: a.symbol, value: a };
        }),
      });
      return {
        ok: true,
      };
    },
    []
  );

  const editPair2 = useCallback(
    (pair: SymbolProps, symbolsOptions?: SymbolsList) => {
      let pair3;
      if (config.pair1 && symbolsOptions) {
        let pair3Index = symbolsOptions?.findIndex(
          (a) =>
            a.baseAsset === pair.baseAsset &&
            a.quoteAsset === config.pair1?.quoteAsset
        );
        if (pair3Index !== -1) {
          pair3 = symbolsOptions[pair3Index];
        }
      }
      setConfig({
        ...config,
        pair2: pair,
        pair3,
      });
      return {
        ok: true,
        pair2: pair,
      };
    },
    [config]
  );

  return (
    <configStore.Provider
      value={{
        config,
        editPair1,
        editPair2,
        parameters,
        updateParameters: setParameters,
      }}
    >
      {children}
    </configStore.Provider>
  );
};

export default ConfigProvider;
