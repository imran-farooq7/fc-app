import "./SignUp.scss";
import FormInput from "../FormInput/FormInput";
import { auth, createUserDocumentFromAuth } from "../../firebase";
import { useState } from "react";
const SignUp = () => {
	const [signupUser, setSignupUser] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const formSubmitHandler = () => {};
	return (
		<div className="sign-up">
			<h2 className="title">I don't have an account</h2>
			<span>Sign up with email and password</span>
			<form className="sign-up-form" onSubmit={formSubmitHandler}>
				<FormInput type="text" value={"hello world"}></FormInput>
			</form>
		</div>
	);
};

export default SignUp;
