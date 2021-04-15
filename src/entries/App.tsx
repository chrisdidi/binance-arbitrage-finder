import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "../components/Menu/Menu";
import ConfigProvider from "../context/configStore";
import AppRouter from "../routers/app-router";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ConfigProvider>
        <BrowserRouter>
          <ToastContainer autoClose={6000} />
          <Menu />
          <AppRouter />
        </BrowserRouter>
      </ConfigProvider>
    </div>
  );
}

export default App;
