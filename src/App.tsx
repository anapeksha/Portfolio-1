import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { theme } from "./lib/Constants";
import Home from "./pages/Home";

const Connect = lazy(() => import("./pages/Connect"));
const Blog = lazy(() => import("./pages/Blog"));

const App = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header>
					<Suspense fallback={<Loader />}>
						<Routes>
							<Route path="/" index element={<Home />} />
							<Route path="blog" element={<Blog />} />
							<Route path="get-in-touch" element={<Connect />} />
						</Routes>
					</Suspense>
				</Header>
				<Footer />
			</ThemeProvider>
		</LocalizationProvider>
	);
};

export default App;
