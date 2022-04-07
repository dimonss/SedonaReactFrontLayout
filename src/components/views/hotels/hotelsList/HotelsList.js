import React, { useMemo, useState } from "react";
import "./hotelsList.scss";
import stringsRU from "../../../../strings/stringsRU";
import amaraIng from "../../../../images/hotels/hotel-1.jpg";
import desertIng from "../../../../images/hotels/hotel-2.jpg";
import villasIng from "../../../../images/hotels/hotel-3.jpg";
import greenIng from "../../../../images/hotels/hotel-4.jpg";
import DropdownSelector from "../../../reusable/dropdownSelector/DropdownSelector";

const Buttons = ({ amount, selected, select }) =>
	[...Array(amount).keys()].map((item) =>
		item === selected - 1 ? (
			<div
				key={item}
				className="pagination__button__active"
				onClick={() => {
					select(item + 1);
				}}
			>
				{item + 1}
			</div>
		) : (
			<div
				key={item}
				className="pagination__button"
				onClick={() => {
					select(item + 1);
				}}
			>
				{item + 1}
			</div>
		)
	);

const HotelCard = ({ image, name, rating, cost, type }) => (
	<div className="hotel-card">
		<div className="hotel-card__inner">
			<div className="hotel-card__image">
				<img src={image} alt="name" />
			</div>
			<div className="hotel-card__name">{name}</div>
			<div className="hotel-card__describe">
				<div>{type}</div>
				<div>{`От ${cost}P`}</div>
			</div>
			<div className="hotel-card__button__container">
				<button className="hotel-card__button__more">{stringsRU.more}</button>
				<button className="hotel-card__button__favorite">{stringsRU.to_favorites}</button>
			</div>
			<div className="hotel-card__rating__container">
				<div className="hotel-card__stars__container">
					{[...Array(parseInt(rating / 2)).keys()].map((item) => (
						<div key={item} className="hotel-card__star">
							<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 0L11.1 6.5H18L12.4 10.5L14.6 17L9 13L3.4 17L5.6 10.5L0 6.5H6.9L9 0Z" fill="#83B3D3" />
							</svg>
						</div>
					))}
				</div>
				<div className="hotel-card__rating__text">{stringsRU.rating + ": " + rating}</div>
			</div>
		</div>
	</div>
);

const HotelsList = () => {
	const data = useMemo(() => [
		{ id: 1, image: amaraIng, name: "Amara Resort & Spa", isFavorite: false, rating: 8.5, cost: 4000, type: stringsRU.hotel },
		{ id: 2, image: desertIng, name: "Desert Quail Inn", isFavorite: false, rating: 8.9, cost: 3000, type: stringsRU.hotel },
		{ id: 3, image: villasIng, name: "Villas at Poco Diablo", isFavorite: true, rating: 9.2, cost: 2000, type: stringsRU.hotel },
		{ id: 4, image: greenIng, name: "GreenTree Inn", isFavorite: false, rating: 9.2, cost: 2000, type: stringsRU.hotel },

		{ id: 5, image: amaraIng, name: "Amara Resort & Spa", isFavorite: false, rating: 8.5, cost: 4000, type: stringsRU.hotel },
		{ id: 6, image: desertIng, name: "Desert Quail Inn", isFavorite: false, rating: 8.9, cost: 3000, type: stringsRU.hotel },
		{ id: 7, image: villasIng, name: "Villas at Poco Diablo", isFavorite: true, rating: 9.2, cost: 2000, type: stringsRU.hotel },
		{ id: 8, image: greenIng, name: "GreenTree Inn", isFavorite: false, rating: 9.2, cost: 2000, type: stringsRU.hotel },

		{ id: 5, image: amaraIng, name: "Amara Resort & Spa", isFavorite: false, rating: 8.5, cost: 4000, type: stringsRU.hotel },
		{ id: 6, image: desertIng, name: "Desert Quail Inn", isFavorite: false, rating: 8.9, cost: 3000, type: stringsRU.hotel },
		{ id: 7, image: villasIng, name: "Villas at Poco Diablo", isFavorite: true, rating: 9.2, cost: 2000, type: stringsRU.hotel },
		{ id: 8, image: greenIng, name: "GreenTree Inn", isFavorite: false, rating: 9.2, cost: 2000, type: stringsRU.hotel },

		{ id: 5, image: amaraIng, name: "Amara Resort & Spa", isFavorite: false, rating: 8.5, cost: 4000, type: stringsRU.hotel },
		{ id: 6, image: desertIng, name: "Desert Quail Inn", isFavorite: false, rating: 8.9, cost: 3000, type: stringsRU.hotel },
		{ id: 7, image: villasIng, name: "Villas at Poco Diablo", isFavorite: true, rating: 9.2, cost: 2000, type: stringsRU.hotel },
		{ id: 8, image: greenIng, name: "GreenTree Inn", isFavorite: false, rating: 9.2, cost: 2000, type: stringsRU.hotel },

		{ id: 5, image: amaraIng, name: "Amara Resort & Spa", isFavorite: false, rating: 8.5, cost: 4000, type: stringsRU.hotel },
		{ id: 6, image: desertIng, name: "Desert Quail Inn", isFavorite: false, rating: 8.9, cost: 3000, type: stringsRU.hotel },
		{ id: 7, image: villasIng, name: "Villas at Poco Diablo", isFavorite: true, rating: 9.2, cost: 2000, type: stringsRU.hotel },
		{ id: 8, image: greenIng, name: "GreenTree Inn", isFavorite: false, rating: 9.2, cost: 2000, type: stringsRU.hotel },

		{ id: 5, image: amaraIng, name: "Amara Resort & Spa", isFavorite: false, rating: 8.5, cost: 4000, type: stringsRU.hotel },
		{ id: 6, image: desertIng, name: "Desert Quail Inn", isFavorite: false, rating: 8.9, cost: 3000, type: stringsRU.hotel },
		{ id: 7, image: villasIng, name: "Villas at Poco Diablo", isFavorite: true, rating: 9.2, cost: 2000, type: stringsRU.hotel },
		{ id: 8, image: greenIng, name: "GreenTree Inn", isFavorite: false, rating: 9.2, cost: 2000, type: stringsRU.hotel },
	]);
	const dropdownAmountOfferList = useMemo(() => [
		{ id: 1, name: 4 },
		{ id: 2, name: 8 },
		{ id: 3, name: 16 },
		{ id: 4, name: 24 },
	]);
	const dropdownList = useMemo(() => [
		{ id: 1, name: "Сначала дешёвые" },
		{ id: 2, name: "Сначала дорогие" },
		{ id: 3, name: "Сначала с высоким рейтингом" },
		{ id: 4, name: "Сначала с низким рейтингом" },
	]);

	const displayModeList = useMemo(() => [
		{
			id: 1,
			svg: (
				<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 0H0V6H4V0Z" fill="black" />
					<path d="M16 0H12V6H16V0Z" fill="black" />
					<path d="M10 0H6V6H10V0Z" fill="black" />
					<path d="M4 8H0V14H4V8Z" fill="black" />
					<path d="M16 8H12V14H16V8Z" fill="black" />
					<path d="M10 8H6V14H10V8Z" fill="black" />
				</svg>
			),
		},
		{
			id: 2,
			svg: (
				<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 12H0V14H16V12Z" fill="black" />
					<path d="M14 2V8H2V2H14ZM16 0H0V10H16V0Z" fill="black" />
				</svg>
			),
		},
		{
			id: 3,
			svg: (
				<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 0H0V2H2V0Z" fill="black" />
					<path d="M16 0H4V2H16V0Z" fill="black" />
					<path d="M2 4H0V6H2V4Z" fill="black" />
					<path d="M16 4H4V6H16V4Z" fill="black" />
					<path d="M2 8H0V10H2V8Z" fill="black" />
					<path d="M16 8H4V10H16V8Z" fill="black" />
					<path d="M2 12H0V14H2V12Z" fill="black" />
					<path d="M16 12H4V14H16V12Z" fill="black" />
				</svg>
			),
		},
	]);
	const [displayMode, setDisplayMode] = useState(1);
	const [pageNunmber, setPageNumber] = useState(1);
	const [sortMode, setSortMode] = useState(dropdownList[0].name);
	const [amountOffer, setAmountOffer] = useState(dropdownAmountOfferList[0].name);
	return (
		<div className="hotels-list">
			<div className="hotels-list__inner">
				<div className="hotels-list__config-bar">
					<div className="hotels-list__config-bar__counter">{stringsRU.found + ": 38"}</div>
					<div className="hotels-list__config-bar__sort">
						<DropdownSelector onValueChange={setSortMode} optionsList={dropdownList} selectedOption={sortMode} />
					</div>
					<div className="hotels-list__config-bar__display-mode">
						{displayModeList.map((item) => (
							<div
								key={item.id}
								className={displayMode === item.id ? "active" : ""}
								onClick={() => {
									setDisplayMode(item.id);
								}}
							>
								{item.svg}
							</div>
						))}
					</div>
				</div>
				<div className="hotels-list__item__container">
					{data.slice(0, amountOffer).map((item) => (
						<HotelCard
							key={item.id}
							name={item.name}
							image={item.image}
							rating={item.rating}
							isFavorite={item.isFavorite}
							cost={item.cost}
							type={item.type}
						/>
					))}
				</div>
				<div className="hotels-list__get-more">
					<button
						onClick={() => {
							setAmountOffer((value) => value + 1);
						}}
					>
						{stringsRU.get_more}
					</button>
				</div>
				<div className="hotels-list__pagination__container">
					<div className="hotels-list__pagination__buttons">
						<Buttons amount={7} selected={pageNunmber} select={setPageNumber} />
					</div>
					<div className="hotels-list__pagination__amount">
						<div>{stringsRU.hotels_on_page}</div>
						<DropdownSelector
							onValueChange={setAmountOffer}
							optionsList={dropdownAmountOfferList}
							selectedOption={amountOffer}
							number
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelsList;
