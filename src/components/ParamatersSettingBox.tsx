import React from "react";
import { ParametersProps } from "../types/general";
import NumInput from "./common/numInput";

interface IProps {
  symbol?: string;
  parameters: ParametersProps;
  pairKey: string;
  onMarginChange: any;
}
const ParametersSettingBox: React.FC<IProps> = ({
  symbol,
  parameters,
  pairKey,
  onMarginChange,
}) => {
  const onBuyChange = (num: number) => {
    onMarginChange(num, pairKey, "buyMargin");
  };
  const onSellChange = (num: number) => {
    onMarginChange(num, pairKey, "sellMargin");
  };
  return (
    <div className="bg-blue-50 rounded-lg p-3">
      <h1 className="title text-base">{symbol}</h1>
      <NumInput
        label="Buy Margin"
        value={parameters.buyMargin}
        onChange={onBuyChange}
      />
      <NumInput
        label="Sell Margin"
        value={parameters.sellMargin}
        onChange={onSellChange}
      />
    </div>
  );
};

export default ParametersSettingBox;
