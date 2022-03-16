import React, { useMemo } from "react";
import "./home_page.scss";
import housingLogo from "../../../images/main_page/home.svg";
import burgerLogo from "../../../images/main_page/burger.svg";
import souvenirLogo from "../../../images/main_page/suvenir.svg";
import canyonImg from "../../../images/main_page/canyon.png";
import houseImg from "../../../images/main_page/house.png";
import stringsRU from "../../../strings/stringsRU";
import SearchHotelSection from "./searchHotelSection/SearchHotelSection";
import SubscribeSection from "../../reusable/subscribe_section/SubscribeSection";

const CellWithImage = ({ image, title, subtitle, bgOpacity }) => (
	<div className="cell__with-image" style={{ "--opacity": bgOpacity }}>
		<div className="cell__with-image__inner">
			<div className="cell__with-image__image">
				<img src={image} alt="logotype" />
			</div>
			<div className="cell__with-image__title">{title}</div>
			<div className="cell__with-image__subtitle">{subtitle}</div>
		</div>
	</div>
);

const Cell = ({ number, title, subtitle, bgOpacity, whiteText }) => (
	<div className={`cell${whiteText ? " white-text" : ""}`} style={{ "--opacity": bgOpacity }}>
		<div className="cell__inner">
			<div className="cell__title">{title}</div>
			<div className="cell__number">{`— №${number} —`}</div>
			<div className="cell__subtitle">{subtitle}</div>
		</div>
	</div>
);

const ImageCell = ({ image }) => (
	<div className="image-cell">
		<img src={image} alt={image} />
	</div>
);

const HomePage = () => {
	const dataForCellWithImage = useMemo(
		() => [
			{ image: housingLogo, title: stringsRU.housing, subtitle: stringsRU.housing_description, bgOpacity: 0.12 },
			{ image: burgerLogo, title: stringsRU.food, subtitle: stringsRU.food_description, bgOpacity: 0 },
			{ image: souvenirLogo, title: stringsRU.souvenir, subtitle: stringsRU.souvenir_description, bgOpacity: 0.12 },
		],
		[]
	);
	const dataForCell = useMemo(
		() => [
			{ number: 3, title: stringsRU.small_area, subtitle: stringsRU.all_attractions_are_very_close, bgOpacity: 0.12 },
			{ number: 4, title: stringsRU.beautiful_road, subtitle: stringsRU.traveling_to_sedona, bgOpacity: 0.2 },
			{ number: 5, title: stringsRU.few_tourists, subtitle: stringsRU.most_go_to_grand_canyon, bgOpacity: 0.12 },
		],
		[]
	);
	return (
		<div className="main-page">
			<div className="main-page-inner">
				<div className="main-page__cells">
					<div className="main-page__cells__row">
						<Cell
							number={"1"}
							title={stringsRU.real_town}
							subtitle={stringsRU.sedona_is_not_a_tourist_attraction}
							bgOpacity={1}
							whiteText
						/>
						<ImageCell image={houseImg} />
					</div>
					<div className="main-page__cells__row">
						{dataForCellWithImage.map((item, index) => (
							<CellWithImage
								key={index}
								image={item.image}
								title={item.title}
								subtitle={item.subtitle}
								bgOpacity={item.bgOpacity}
							/>
						))}
					</div>
					<div className="main-page__cells__row">
						<ImageCell image={canyonImg} />
						<Cell
							number={"2"}
							title={stringsRU.there_is_devils_bridge}
							subtitle={stringsRU.yes_you_can_through_it}
							bgOpacity={1}
							whiteText
						/>
					</div>
					<div className="main-page__cells__row">
						{dataForCell.map((item, index) => (
							<Cell key={index} number={item.number} title={item.title} subtitle={item.subtitle} bgOpacity={item.bgOpacity} />
						))}
					</div>
				</div>
			</div>
			<SearchHotelSection />
			<SubscribeSection />
		</div>
	);
};

export default HomePage;
