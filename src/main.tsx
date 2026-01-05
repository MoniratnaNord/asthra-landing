import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AstrahLanding from "./components/Custom.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* <App /> */}
		<AstrahLanding />
	</StrictMode>
);
