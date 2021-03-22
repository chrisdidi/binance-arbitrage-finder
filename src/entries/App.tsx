import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import AppRouter from "../routers/app-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
