import { GlobalStyles } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

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
					},
				}}
			/>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
