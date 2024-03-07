import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "@/helpers/styles/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Spinner from "./components/Spinner";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_ID}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PersistGate loading={<Spinner />} persistor={persistor}>
            <BrowserRouter basename="/">
              <App />
            </BrowserRouter>
          </PersistGate>
        </ThemeProvider>
      </Provider>{" "}
    </GoogleOAuthProvider>
  </React.StrictMode>
);
