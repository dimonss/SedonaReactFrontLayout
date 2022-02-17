import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./stylesheets/fonts/font.scss"
import "./stylesheets/normalize.scss"
import Header from "./components/views/header/Header";

ReactDOM.render(
	<div className="App">
		<Header />
	</div>,
	document.getElementById("root")
);
