import { GlobalStyles } from "@mui/material";
import "animate.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-very-cool-cursor";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyles
				styles={{
					html: {
						scrollBehavior: "smooth",
					},
					body: {
						WebkitFontSmoothing: "antialiased",
						MozOsxFontSmoothing: "grayscale",
						WebkitUserSelect: "none",
						MsUserSelect: "none",
						UserSelect: "none",
					},
				}}
			/>
			<AnimatedCursor
				innerSize={8}
				outerSize={24}
				color="144, 202, 249"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={2}
			/>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

serviceWorkerRegistration.register();
