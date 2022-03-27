import React from "react";
import "./inputs.scss";
const InputWithButton = ({ placeHolder, buttonTitle, onClickCallback, value, setValue }) => {
	return (
		<div className="input-with-button">
			<div className="input-with-button__input">
				<input type="text" placeholder={placeHolder} value={value} onChange={(e) => setValue(e.target.value)} />
			</div>
			<div className="input-with-button__button" onClick={onClickCallback}>
				{buttonTitle}
			</div>
		</div>
	);
};

export default InputWithButton;
