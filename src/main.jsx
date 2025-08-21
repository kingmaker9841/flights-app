import "./index.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { QueryProvider } from "./providers/QueryProvider.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <QueryProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryProvider>
  // </StrictMode>
);
