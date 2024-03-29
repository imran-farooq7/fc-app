import React from "react";
import "./FormInput.scss";

const FormInput = ({ OnChangeHandler, label, ...otherProps }) => {
	return (
		<div className="group">
			<input
				type="text"
				className="form-input"
				onChange={OnChangeHandler}
				{...otherProps}
			/>
			{label ? (
				<label
					className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
