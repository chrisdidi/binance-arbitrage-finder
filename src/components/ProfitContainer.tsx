import { useContext } from "react";
import { ProfitCalculatorProps } from "../apis/types";
import { configStore } from "../context/configStore";
import profitCalculator from "../profitCalculator";

interface IProps {
  tickers: ProfitCalculatorProps;
}
const ProfitContainer: React.FC<IProps> = ({ tickers }) => {
  const { parameters } = useContext(configStore);
  let { left, right } = profitCalculator(tickers, parameters);
  return (
    <div className=" w-full rounded-lg bg-blue-50 p-3 mt-2">
      <div className="w-full flex justify-around items-center">
        <div className=" w-full">
          <div className="flex items-center">
            <div className="mr-2 rounded-full h-2 w-2 bg-purple-500">
              <div className="mr-2 rounded-full h-2 w-2 bg-purple-500 opacity-70 animate-ping"></div>
            </div>
            <p className=" text-sm text-gray-500">Path 1</p>
          </div>
          <h1
            className={`font-bold text-lg ${
              left > 100.0
                ? "text-green-400"
                : left < 100
                ? "text-yellow-400"
                : "text-blue-500"
            }`}
          >
            {left}%
          </h1>
        </div>
        <div className=" w-full">
          <div className="flex items-center">
            <div className="mr-2 rounded-full h-2 w-2 bg-blue-500">
              <div className="mr-2 rounded-full h-2 w-2 bg-blue-500 opacity-70 animate-ping"></div>
            </div>
            <p className=" text-sm text-gray-500">Path 2</p>
          </div>
          <h1
            className={`font-bold text-lg ${
              right > 100.0
                ? "text-green-400"
                : right < 100
                ? "text-yellow-400"
                : "text-blue-500"
            }`}
          >
            {right}%
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProfitContainer;
