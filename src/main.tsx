import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./theme/appTheme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={appTheme}>
    <Provider store={store}>
      <React.StrictMode>
        <CssBaseline />
        <App />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>
);
