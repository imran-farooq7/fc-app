import React, { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./Signin.scss";
import { signInWithGoogle } from "../../firebase";

const Signin = () => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setCredentials({
			email: "",
			password: "",
		});
	};
	const onChangeHandler = (e) => {
		const { value, name } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					id="email"
					value={credentials.email}
					OnChangeHandler={onChangeHandler}
					label="Email"
				/>

				<FormInput
					type="password"
					name="password"
					id="password"
					value={credentials.password}
					onChange={onChangeHandler}
					label="Password"
				/>
				<Button type="submit" value="submit">
					Sign in
				</Button>
				<Button type="submit" value="submit" onClick={signInWithGoogle}>
					Sign in With Google
				</Button>
			</form>
		</div>
	);
};

export default Signin;
