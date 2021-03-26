export type SelectorProps = {
  label?: string;
  value?: any;
};

export type ConfigProps = {
  pair1?: SymbolProps;
  pair2?: SymbolProps;
  pair3?: SymbolProps;
  pair2Options?: SelectorProps[];
};

export type SymbolProps = {
  symbol: string;
  status: string;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  quoteAssetPrecision: number;
  baseCommissionPrecision: number;
  quoteCommissionPrecision: number;
};

export type ParametersProps = {
  buyMargin: number;
  sellMargin: number;
};
