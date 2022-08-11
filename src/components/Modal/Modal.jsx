import React from "react"

import "./Modal.scss"

const Modal = (props) => {
	return (
		<div className="cmodal">
			<div className="modal-container">
				<div className="modal-head">
					{props.header}
					<button className="btn btn--secondary close" onClick={props.handleClose}>&times;</button>
				</div>
				{props.children}
			</div>
		</div>
	)
}

export default Modal