import React from "react";
import ReactDOM from "react-dom";
import "./modal_window.scss";

const modalRoot = document.getElementById("modal-window-root");

const ModalWindow = (props) => {
	const { children } = props;
	const childrenWithProps = React.Children.map(children, (child) => React.cloneElement(child));
	return (
		props.isOpen &&
		ReactDOM.createPortal(
			<div
				className="modal-window"
				onClick={() => {
					console.log("!!");
				}}
			>
				{/*<div className="modal-window__overlay" onClick={() => props.setIsOpen(false)}>*/}
				<div className="modal-window__overlay">{childrenWithProps}</div>
			</div>,
			modalRoot
		)
	);
};

export default ModalWindow;
