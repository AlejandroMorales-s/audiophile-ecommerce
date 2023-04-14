import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <Router>
          <App />
        </Router>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
