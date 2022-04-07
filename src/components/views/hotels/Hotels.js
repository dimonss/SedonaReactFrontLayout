import React from "react";
import { useLocation } from "react-router-dom";
import FilterBar from "./FilterBar/FilterBar";
import HotelsList from "./hotelsList/HotelsList";

const Hotels = () => {
	const { state } = useLocation();
	console.log(state);
	return (
		<>
			<FilterBar />
			<HotelsList />
		</>
	);
};

export default Hotels;
