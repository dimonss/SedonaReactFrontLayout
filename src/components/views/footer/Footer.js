import React, { useMemo } from "react";
import "./footer.scss";
import twitterLogo from "../../../images/footer/twitterLogo.png";
import facebookLogo from "../../../images/footer/facebookLogo.png";
import yotubeLogo from "../../../images/footer/youtubeLogo.png";
import myLogo from "../../../images/footer/dichLogoBlack.png";
import stringsRU from "../../../strings/stringsRU";

const Footer = () => {
	const logoList = useMemo(() => [
		{ logo: twitterLogo, link: "https://www.youtube.com/channel/UCPbC5ufuOchps4KxGc50zKA" },
		{ logo: facebookLogo, link: "https://www.youtube.com/channel/UCPbC5ufuOchps4KxGc50zKA" },
		{ logo: yotubeLogo, link: "https://www.youtube.com/channel/UCPbC5ufuOchps4KxGc50zKA" },
	]);
	return (
		<div className="footer">
			<div className="footer__inner">
				<div className="footer__contact-list">
					{logoList.map((item, index) => (
						<a key={index} href={item.link}>
							<img src={item.logo} alt={item.link} />
						</a>
					))}
				</div>
				<a className="footer__phone-number" href={`tel:${stringsRU.myPhoneNumber}`}>
					{stringsRU.myPhoneNumberView}
				</a>
				<div className="footer__my-logo">
					<img src={myLogo} alt="dich logo" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
