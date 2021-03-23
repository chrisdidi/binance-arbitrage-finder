import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "../components/menu/Menu";
import ConfigProvider from "../context/configStore";
import AppRouter from "../routers/app-router";

function App() {
  return (
    <div className="App">
      <ConfigProvider>
        <BrowserRouter>
          <Menu />
          <AppRouter />
        </BrowserRouter>
      </ConfigProvider>
    </div>
  );
}

export default App;
