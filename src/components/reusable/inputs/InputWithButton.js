import React from "react";
import "./inputs.scss";
const InputWithButton = ({ placeHolder, buttonTitle }) => {
	return (
		<div className="input-with-button">
			<div className="input-with-button__input">
				<input type="text" placeholder={placeHolder} />
			</div>
			<div className="input-with-button__button">{buttonTitle}</div>
		</div>
	);
};

export default InputWithButton;
