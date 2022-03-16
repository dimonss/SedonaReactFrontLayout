import React, { useCallback } from "react";
import stringsRU from "../../../../strings/stringsRU";
import "./search_hotel_section.scss";
import { useDispatch } from "react-redux";
import { toggleModalWindow } from "../../../../store/actions/uiActions";

const SearchHotelSection = () => {
	const dispatch = useDispatch();
	const dispatchOpenModalWindow = useCallback(() => dispatch(toggleModalWindow(true)), [dispatch]);
	return (
		<div className="search-hotel-section">
			<div className="search-hotel-section__inner">
				<div className="search-hotel-section__title">{stringsRU.interested}</div>
				<div className="search-hotel-section__subtitle">{stringsRU.indicate_your_expected_travel_dates}</div>
				<div className="search-hotel-section__button" onClick={dispatchOpenModalWindow}>
					{stringsRU.search_hotel_sedona}
				</div>
			</div>
		</div>
	);
};

export default SearchHotelSection;
