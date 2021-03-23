const endpoints = {
  base: "https://api.binance.com",
};

const Binance = () => {
  const getExchangeInfo = async () => {
    try {
      const data = await fetch(`${endpoints.base}/api/v3/exchangeInfo`, {
        method: "get",
      });
      const jsonData = await data.json();
      if (!Boolean(jsonData.symbols)) {
        throw new Error(jsonData);
      }
      return {
        symbols: jsonData.symbols,
      };
    } catch (error) {
      return {
        error,
      };
    }
  };
  return { getExchangeInfo };
};

export default Binance;
