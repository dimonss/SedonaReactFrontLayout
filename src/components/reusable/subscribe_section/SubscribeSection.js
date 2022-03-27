import React, { useState } from "react";
import stringsRU from "../../../strings/stringsRU";
import "./subscribe_section.scss";
import InputWithButton from "../inputs/InputWithButton";
import { toastStore, status } from "../../../utils/toastStore";

const SubscribeSection = () => {
	const [inputString, setInputString] = useState("");

	const getSubscribe = () => {
		if (inputString) {
			setInputString("");
			toastStore(status.SUCCESS, "Вы успешно подписаны на рассылку!", 5000);
		} else {
			toastStore(status.ERROR, "Введите почту!", 5000);
		}
	};

	return (
		<div className="subscribe-section">
			<div className="subscribe-section__inner">
				<div className="subscribe-section__title">{stringsRU.subscribe_to_the_newsletter}</div>
				<div className="subscribe-section__subtitle">{stringsRU.only_useful_information}</div>
				<InputWithButton
					placeHolder={stringsRU.your_e_mail}
					buttonTitle={stringsRU.subscribe}
					onClickCallback={getSubscribe}
					value={inputString}
					setValue={setInputString}
				/>
			</div>
		</div>
	);
};

export default SubscribeSection;
