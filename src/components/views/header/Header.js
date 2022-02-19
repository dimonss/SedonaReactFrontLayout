import "./header.scss";
import React, { useState } from "react";
import headerLogoImg from "../../../images/header/logo.svg";
import searchImg from "../../../images/header/search.svg";
import favoriteImg from "../../../images/header/favorite.svg";
import stringsRU from "../../../strings/stringsRU";
const navbarList = [stringsRU.main, stringsRU.about_sedona, stringsRU.hotel];
const imagesList = [
	{ image: searchImg, alert: 0 },
	{ image: favoriteImg, alert: 12 },
];
const Nav = ({ list, activePage, setActivePage }) =>
	list.map((item, index) => (
		<div key={index} className={`header__navbar__item${activePage === index ? " active" : ""}`} onClick={() => setActivePage(index)}>
			{item}
		</div>
	));
const Pictures = ({ list }) =>
	list.map((item, index) => (
		<div key={index} className="header__pictures">
			<img src={item.image} alt="logo" />
			{!!item.alert && <div className="header__pictures__alert">{item.alert}</div>}
		</div>
	));

const Header = () => {
	const [activePage, setActivePage] = useState(0);
	return (
		<div className="header">
			<div className="header__inner">
				<div className="header__logo">
					<img src={headerLogoImg} alt="Sedona logo" />
				</div>
				<div className="header__navbar">{<Nav list={navbarList} activePage={activePage} setActivePage={setActivePage} />}</div>
				<div className="header__pictures__wrapper">{<Pictures list={imagesList} />}</div>
				<div className="header__button">{stringsRU.i_want_to_go_there}</div>
			</div>
		</div>
	);
};

export default Header;
