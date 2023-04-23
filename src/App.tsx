import { CssBaseline, ThemeProvider } from "@mui/material";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { theme } from "./lib/Constants";
import Home from "./pages/Home";

const Connect = lazy(() => import("./pages/Connect"));
const Review = lazy(() => import("./pages/Review"));
const Blog = lazy(() => import("./pages/Blog"));

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" index element={<Home />} />
						<Route path="blog" element={<Blog />} />
						<Route path="review" element={<Review />} />
						<Route path="connect" element={<Connect />} />
					</Routes>
				</Suspense>
			</Header>
		</ThemeProvider>
	);
};

export default App;
