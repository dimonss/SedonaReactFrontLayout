import React from "react";
import "./top_banner.scss";
import wellcomeImg from "../../../../images/banner/main_page/wlcome.png";
import toTheImg from "../../../../images/banner/main_page/to_the.png";
import sedonaImg from "../../../../images/banner/main_page/sedona.png";
import stringsRU from "../../../../strings/stringsRU";

const TopBanner = () => {
	return (
		<div className="top-banner">
			<div className="top-banner__background">
				<div className="top-banner__inner">
					<div className="top-banner__text-wrapper">
						<div>
							<img src={wellcomeImg} alt="wellcomeImg" />
						</div>
						<div>
							<img src={toTheImg} alt="toTheImg" />
						</div>
					</div>
					<div className="top-banner__sedona">
						<img src={sedonaImg} alt="sedonaImg" />
					</div>
				</div>
			</div>
			<div className="top-banner__text-container">
				<div className="top-banner__title">{stringsRU.top_banner_title}</div>
				<div className="top-banner__subtitle">{stringsRU.top_banner_subtitle}</div>
			</div>
		</div>
	);
};

export default TopBanner;
