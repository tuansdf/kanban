import "@fontsource-variable/inter";
import "antd/dist/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "~/styles/global.scss";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
