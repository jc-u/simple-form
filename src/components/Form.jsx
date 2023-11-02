import { useState } from "react";

const Form = ({ onSubmit }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleConfirmPasswordChange = (event) => {
		setConfirmPassword(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setFormData({
			name: name,
			email: email,
			password: password,
			confirmPassword: confirmPassword,
		});
		onSubmit(formData);
	};

	return (
		<>
			<h1>Create account</h1>
			<form onSubmit={handleSubmit}>
				<span>Name</span>
				<input
					type="text"
					name="name"
					value={name}
					onChange={handleNameChange}
				/>
				<span>Email</span>
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleEmailChange}
				/>
				<span>Password</span>
				<input
					name="password"
					type="password"
					value={password}
					onChange={handlePasswordChange}
				/>
				<span>Confirm your password</span>
				<input
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					onChange={handleConfirmPasswordChange}
				/>
				<input className="submit-button" type="submit" value="Register" />
			</form>
		</>
	);
};

export default Form;
