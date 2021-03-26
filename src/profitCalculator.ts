import { ProfitCalculatorProps, ProfitCalculatorResult } from "./apis/types";
import { ParametersSetProps } from "./types/general";

function profitCalculator(
  { ticker1, ticker2, ticker3 }: ProfitCalculatorProps,
  { pair1, pair2, pair3 }: ParametersSetProps
): ProfitCalculatorResult {
  const startBal = 100;
  let leftBal = 100;
  let rightBal = 100;

  // Start calculating profits for left path
  leftBal =
    ((startBal / (ticker2.bestAsk * pair2.buyMargin)) *
      (ticker3.bestBid * pair3.sellMargin)) /
    (ticker1.bestAsk * pair1.buyMargin);
  rightBal =
    ((startBal * (ticker1.bestBid * pair1.sellMargin)) /
      (ticker3.bestAsk * pair3.buyMargin)) *
    (ticker2.bestBid * pair2.sellMargin);
  return {
    left: (leftBal / startBal) * 100,
    right: (rightBal / startBal) * 100,
  };
}

export default profitCalculator;
