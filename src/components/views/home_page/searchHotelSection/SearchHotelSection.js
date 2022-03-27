import React, { useCallback } from "react";
import stringsRU from "../../../../strings/stringsRU";
import "./search_hotel_section.scss";
import { useNavigate } from "react-router-dom";
import urls from "../../../../urls";

const SearchHotelSection = () => {
	const navigate = useNavigate();
	const serarchHotel = useCallback(() => {
		navigate(urls.HOTELS);
	}, []);

	return (
		<div className="search-hotel-section">
			<div className="search-hotel-section__inner">
				<div className="search-hotel-section__title">{stringsRU.interested}</div>
				<div className="search-hotel-section__subtitle">{stringsRU.indicate_your_expected_travel_dates}</div>
				<div className="search-hotel-section__button" onClick={serarchHotel}>
					{stringsRU.search_hotel_sedona}
				</div>
			</div>
		</div>
	);
};

export default SearchHotelSection;
