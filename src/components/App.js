import React from "react";
import Header from "./views/header/Header";
import TopBanner from "./views/banners/main_page/TopBanner";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/home_page/HomePage";
import Hotels from "./views/hotels/Hotels";
import Footer from "./views/footer/Footer";
import SearchModalWindow from "./modal_windows/SearchModalWindow";
import urls from "../urls";
import About from "./views/about/About";
import SubscribeSection from "./reusable/subscribe_section/SubscribeSection";
import ToastStore from "./views/toastStore/ToastStore";

const App = () => (
	<div className="app">
		<Header />
		<Routes>
			<Route
				path={urls.HOME}
				element={
					<>
						<TopBanner />
						<HomePage />
					</>
				}
			/>

			<Route
				path={urls.ABOUT}
				element={
					<>
						<TopBanner />
						<About />
					</>
				}
			/>

			<Route
				path={urls.HOTELS}
				element={
					<>
						<Hotels />
						<SubscribeSection />
					</>
				}
			/>
		</Routes>
		<Footer />
		<SearchModalWindow />
		<ToastStore />
	</div>
);

export default App;
