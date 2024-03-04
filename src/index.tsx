import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DefaultLayout from "@/layouts/default.tsx";

import "@/App.css";
import App from "@/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <DefaultLayout>
        <App />
      </DefaultLayout>
    </NextUIProvider>
  </StrictMode>,
);
