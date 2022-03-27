import React from "react";
import { useLocation } from "react-router-dom";
import FilterBar from "./FilterBar/FilterBar";

const Hotels = () => {
	const { state } = useLocation();
	console.log(state);
	return <FilterBar />;
};

export default Hotels;
