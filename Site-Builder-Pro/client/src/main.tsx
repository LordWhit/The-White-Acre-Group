import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element. Please make sure there is a <div id=\"root\"></div> in your index.html");
}

createRoot(rootElement).render(<App />);