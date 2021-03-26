import { useContext } from "react";
import { configStore } from "../context/configStore";
import ParametersSettingBox from "./ParamatersSettingBox";

const ParametersSettings = () => {
  const { parameters, updateParameters, config } = useContext(configStore);

  const onMarginChange = (
    num: number,
    pairKey: "pair1" | "pair2" | "pair3",
    typeKey: "buyMargin" | "sellMargin"
  ) => {
    if (updateParameters) {
      updateParameters({
        ...parameters,
        [pairKey]: {
          ...parameters.pair1,
          [typeKey]: num,
        },
      });
    }
  };

  return (
    <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-2">
      <ParametersSettingBox
        symbol={config.pair1?.symbol}
        parameters={parameters.pair1}
        pairKey={"pair1"}
        onMarginChange={onMarginChange}
      />
      <ParametersSettingBox
        symbol={config.pair1?.symbol}
        parameters={parameters.pair2}
        pairKey={"pair2"}
        onMarginChange={onMarginChange}
      />
      <ParametersSettingBox
        symbol={config.pair1?.symbol}
        parameters={parameters.pair3}
        pairKey={"pair3"}
        onMarginChange={onMarginChange}
      />
    </div>
  );
};

export default ParametersSettings;
