import React from "react";
import "./dropdownSelector.scss";
import PropTypes from "prop-types";

const DropdownSelector = ({ optionsList, selectedOption, onValueChange, number }) => (
    <div className="dropdown">
        <div className="dropdown__control">
            <select value={selectedOption} onChange={e => onValueChange(number ? parseInt(e.target.value) : e.target.value)}>
                {optionsList.map((item, index) => (
                    <option key={index} value={item?.name}>
                        {item?.name}
                    </option>
                ))}
            </select>
            <svg width="12" height="7" viewBox="0 0 12 7"  xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6 6.7001L11.7 1.4001C12 1.1001 12 0.500098 11.7 0.200098C11.4 -0.0999023 10.8 -0.0999023 10.5 0.200098L6 4.9001L1.5 0.200098C1.2 -0.0999023 0.6 -0.0999023 0.3 0.200098C0.1 0.300098 0 0.600098 0 0.800098C0 1.0001 0.1 1.2001 0.3 1.4001L5.4 6.7001C5.7 7.1001 6.3 7.1001 6.6 6.7001Z" fill="#E6E6E6"/>
            </svg>
        </div>
    </div>
);

DropdownSelector.propTypes = {
    optionsList: PropTypes.array,
    selectedOptions: PropTypes.string,
    onValueChange: PropTypes.func,
    number: PropTypes.number,
};

export default DropdownSelector;