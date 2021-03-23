import React, { createContext, useCallback, useState } from "react";
import { ConfigProps, SymbolProps } from "../types/general";

type UpdateResult = {
  ok: boolean;
  error?: any;
};
interface ContextProps {
  config: ConfigProps;
  editPair1?: (pair: SymbolProps) => UpdateResult;
  editPair2?: (pair: SymbolProps) => UpdateResult;
}
export const configStore = createContext<ContextProps>({
  config: {},
});

const ConfigProvider: React.FC = ({ children }) => {
  const [config, setConfig] = useState<ConfigProps>({});

  const editPair1 = useCallback((pair: SymbolProps) => {
    setConfig({
      pair1: pair,
    });
    return {
      ok: true,
    };
  }, []);

  const editPair2 = useCallback((pair: SymbolProps) => {
    return {
      ok: true,
    };
  }, []);
  return (
    <configStore.Provider
      value={{
        config,
        editPair1,
        editPair2,
      }}
    >
      {children}
    </configStore.Provider>
  );
};

export default ConfigProvider;
