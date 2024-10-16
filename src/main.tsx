import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { ReactFlowProvider } from "@xyflow/react";

import theme from "./utils/theme.ts";
import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <ReactFlowProvider>
                <App />
            </ReactFlowProvider>
        </ThemeProvider>
    </StrictMode>
);
