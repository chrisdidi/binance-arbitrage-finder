import { ProfitCalculatorProps, ProfitCalculatorResult } from "../apis/types";

const useProfitCalculator = ({
  ticker1,
  ticker2,
  ticker3,
}: ProfitCalculatorProps): ProfitCalculatorResult => {
  return {
    left: 99.7,
    right: 101.0,
  };
};

export default useProfitCalculator;
