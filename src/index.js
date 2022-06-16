import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";
import { Routes } from "./Routes";
import { Modals } from "./components/Modals/Modals";
import { AuthContextProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <App />
          <Modals />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </Provider>,
);
