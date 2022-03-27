import React, { useMemo, useState } from "react";
import "./filterBar.scss";
import stringsRU from "../../../../strings/stringsRU";
import { Box, Slider } from "@mui/material";
const FilterBar = () => {
	const [housingType, setHousingType] = useState(0);
	const [checkboxStatus, setCheckboxStatus] = useState([false, true, true]);
	const [costFilterValue, setCostFilterValue] = useState([2000, 9000]);
	const infrastructureList = useMemo(() => ["Бассейн", "Парковка", "Wi-Fi"], []);
	const housingList = useMemo(() => ["Гостинница", "Мотель", "Аппартаменты"], []);
	function valuetext(value) {
		return `${value}°C`;
	}
	return (
		<div className="filter-bar">
			<div className="filter-bar__inner">
				<div className="filter-bar__title">{stringsRU.sedona_hotels}</div>
				<div className="filter-bar__bottom-container">
					<div className="filter-bar__infrastructure">
						<div className="filter-bar__infrastructure__title">{stringsRU.infrastructure}:</div>
						{infrastructureList.map((item, index) => (
							<div
								key={index}
								className="filter-bar__infrastructure__item"
								onClick={() => {
									setCheckboxStatus((value) => {
										const eValue = value.slice(0);
										eValue[index] = !value[index];
										return eValue;
									});
								}}
							>
								<input type="checkbox" checked={checkboxStatus[index]} readOnly />
								<p>{item}</p>
							</div>
						))}
					</div>
					<div className="filter-bar__housing">
						<div className="filter-bar__housing__title">{stringsRU.hotel_type}:</div>
						{housingList.map((item, index) => (
							<div
								key={index}
								className="filter-bar__housing__item"
								onClick={() => {
									setHousingType(index);
								}}
							>
								<input type="radio" checked={housingType === index} readOnly/>
								<p>{item}</p>
							</div>
						))}
					</div>
					<div className="filter-bar__cost-calc">
						<div className="filter-bar__cost-calc__title">{stringsRU.cost + ", ₽:"}</div>
						<div className="filter-bar__cost-calc__values-box">
							<div className="with-border">
								<div>{costFilterValue[0]}</div>
								<div>{stringsRU.from}</div>
							</div>
							<div>
								<div>{costFilterValue[1]}</div>
								<div>{stringsRU.to}</div>
							</div>
						</div>
						<div className="filter-bar__cost-calc__slider">
							<Box sx={{ width: 300 }}>
								<Slider
									getAriaLabel={() => "Temperature range"}
									value={costFilterValue}
									onChange={(e, newValue) => {
										setCostFilterValue(newValue);
									}}
									valueLabelDisplay="auto"
									getAriaValueText={valuetext}
									step={100}
									max={12000}
								/>
							</Box>
						</div>
					</div>
					<div className="filter-bar__buttons">
						<button className="apply">{stringsRU.apply}</button>
						<button className="reset">{stringsRU.reset}</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterBar;
