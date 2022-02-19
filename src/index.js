import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./stylesheets/fonts/font.scss";
import "./stylesheets/normalize.scss";
import Header from "./components/views/header/Header";
import TopBanner from "./components/views/banners/main_page/TopBanner";
import HomePage from "./components/views/home_page/HomePage";
import Footer from "./components/views/footer/Footer";

ReactDOM.render(
	<div className="page">
		<Header />
		<TopBanner />
		<HomePage />
		<Footer />
	</div>,
	document.getElementById("root")
);
