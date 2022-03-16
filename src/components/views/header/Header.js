import "./header.scss";
import React, { useCallback, useEffect, useState } from "react";
import headerLogoImg from "../../../images/header/logo.svg";
import searchImg from "../../../images/header/search.svg";
import favoriteImg from "../../../images/header/favorite.svg";
import stringsRU from "../../../strings/stringsRU";
import { useDispatch } from "react-redux";
import { toggleModalWindow } from "../../../store/actions/uiActions";
import { Link, useLocation } from "react-router-dom";
import urls from "../../../urls";
const navbarList = [
	{ title: stringsRU.main, link: urls.HOME },
	{ title: stringsRU.about_sedona, link: urls.ABOUT },
	{ title: stringsRU.hotels, link: urls.HOTELS },
];
const imagesList = [
	{ image: searchImg, alert: 0 },
	{ image: favoriteImg, alert: 12 },
];
const Nav = ({ list, activePage }) =>
	list.map((item, index) => (
		<div key={index} className={`header__navbar__item${activePage === index ? " active" : ""}`}>
			<Link to={item.link}>{item.title}</Link>
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
	const dispatch = useDispatch();
	const dispatchOpenModalWindow = useCallback(() => dispatch(toggleModalWindow(true)), [dispatch]);
	const { pathname } = useLocation();
	useEffect(() => {
		const urlsMass = Object.values(urls);
		urlsMass.forEach((item, index) => {
			if (item === pathname) setActivePage(index);
		});
	}, [pathname]);
	return (
		<div className="header">
			<div className="header__inner">
				<div className="header__logo">
					<img src={headerLogoImg} alt="Sedona logo" />
				</div>
				<div className="header__navbar">{<Nav list={navbarList} activePage={activePage} />}</div>
				<div className="header__pictures__wrapper">{<Pictures list={imagesList} />}</div>
				<div className="header__button" onClick={dispatchOpenModalWindow}>
					{stringsRU.i_want_to_go_there}
				</div>
			</div>
		</div>
	);
};

export default Header;
