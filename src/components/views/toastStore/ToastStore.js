import React from "react";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";

const ToastStore = () => {
	const toastData = useSelector((state) => state?.ui?.toast);
	return (
		toastData && (
			<div className="alert" style={{ display: "flex", justifyContent: "center", position: "fixed", bottom: "100px", width: "100%" }}>
				<Alert severity={toastData.type}>{toastData.message}</Alert>
			</div>
		)
	);
};

export default ToastStore;
