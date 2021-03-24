import { useState } from "react";
import PairsSelector from "../components/PairsSelector";
import ProfitChecker from "../components/ProfitChecker";

const Home = () => {
  const [showProfit, setShowProfit] = useState(false);

  return (
    <div className=" min-h-screen w-full bg-gradient-to-br from-green-400 to-indigo-400 flex flex-col md:flex-row items-start p-4 pt-24">
      <PairsSelector
        onShowProfit={setShowProfit.bind(this, !showProfit)}
        showProfit={showProfit}
      />
      {showProfit && <ProfitChecker />}
    </div>
  );
};

export default Home;
