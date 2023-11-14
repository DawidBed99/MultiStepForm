import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FormProvider } from "./context/FormContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </StrictMode>,
);
