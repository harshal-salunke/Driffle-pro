import React from "react";
import ReactDOMClient from "react-dom/client";
import { AboutUsPage } from "./screens/AboutUsPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AboutUsPage />);
