import React from "react";
import stringsRU from "../../../strings/stringsRU";
import "./subscribe_section.scss";
import InputWithButton from "../../reusable/inputs/InputWithButton";

const SubscribeSection = () => {
	return (
		<div className="subscribe-section">
			<div className="subscribe-section__inner">
				<div className="subscribe-section__title">{stringsRU.subscribe_to_the_newsletter}</div>
				<div className="subscribe-section__subtitle">{stringsRU.only_useful_information}</div>
				<InputWithButton placeHolder={stringsRU.your_e_mail} buttonTitle={stringsRU.subscribe} />
			</div>
		</div>
	);
};

export default SubscribeSection;
