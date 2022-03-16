import React from "react";
import {useLocation} from "react-router-dom";

const Hotels = () => {
    const { state } = useLocation();
    console.log(state);
	return <>hotels</>;
};

export default Hotels;
