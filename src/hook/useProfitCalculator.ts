import { ProfitCalculatorProps, ProfitCalculatorResult } from "../apis/types";
import { ParametersSetProps } from "../types/general";

const useProfitCalculator = (
  { ticker1, ticker2, ticker3 }: ProfitCalculatorProps,
  { pair1, pair2, pair3 }: ParametersSetProps
): ProfitCalculatorResult => {
  let left = 100.0;
  let right = 100.0;

  return {
    left: 99.7,
    right: 101.0,
  };
};

export default useProfitCalculator;
