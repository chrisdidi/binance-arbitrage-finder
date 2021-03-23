export type PairProps = {
  symbol?: string;
};

export type ConfigProps = {
  pair1: PairProps;
  pair2: PairProps;
  pair3: PairProps;
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
