import React from "react";
import stringsRU from "../../../strings/stringsRU";
import "./search_hotel_section.scss";

const SearchHotelSection = () => {
	return (
		<div className="search-hotel-section">
			<div className="search-hotel-section__inner">
				<div className="search-hotel-section__title">{stringsRU.interested}</div>
				<div className="search-hotel-section__subtitle">{stringsRU.indicate_your_expected_travel_dates}</div>
				<div className="search-hotel-section__button">{stringsRU.search_hotel_sedona}</div>
			</div>
		</div>
	);
};

export default SearchHotelSection;
