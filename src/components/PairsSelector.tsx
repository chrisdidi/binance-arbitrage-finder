import React from "react";
import Selector from "./common/selector";

const PairsSelector = () => {
  return (
    <div className=" white-box md:max-w-md">
      <h1 className=" title">Select 3 pairs to begin with!</h1>
      <Selector label={"Pair 1"} />
      <Selector
        label={"Pair 2"}
        hint="You must select Pair 1 first."
        disabled={true}
      />
      <Selector label={"Pair 3"} hint="You must select Pair 2 first." />
    </div>
  );
};

export default PairsSelector;
