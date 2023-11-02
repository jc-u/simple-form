import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({ onSubmit }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordError, setPasswordError] = useState(false); // État de validation
	const [showPassword, setShowPassword] = useState(false);

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		const newPassword = event.target.value;
		setPassword(newPassword);
		// Vérifie si les mots de passe correspondent à chaque changement
		if (newPassword !== confirmPassword) {
			setPasswordError(true);
		} else {
			setPasswordError(false);
		}
	};

	const handleConfirmPasswordChange = (event) => {
		const newConfirmPassword = event.target.value;
		setConfirmPassword(newConfirmPassword);

		// Vérifie si les mots de passe correspondent à chaque changement
		if (newConfirmPassword !== password) {
			setPasswordError(true);
		} else {
			setPasswordError(false);
		}
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (password === confirmPassword) {
			setPasswordError(false);
			onSubmit({ name, email, password, confirmPassword });
		} else {
			setPasswordError(true);
			alert("Vos deux mots de passe ne sont pas identiques");
		}
	};

	return (
		<>
			<h1>Create account</h1>
			<form onSubmit={handleSubmit}>
				<span>Name</span>
				<input
					type="text"
					name="name"
					placeholder="Jean Dupont"
					value={name}
					onChange={handleNameChange}
				/>
				<span>Email</span>
				<input
					type="email"
					name="email"
					placeholder="jeandupont@lereacteur.io"
					value={email}
					onChange={handleEmailChange}
				/>

				<span>Password</span>
				<div className="password">
					<input
						name="password"
						type={showPassword ? "text" : "password"}
						placeholder="IErEaCtEuR2020"
						value={password}
						onChange={handlePasswordChange}
						className={passwordError ? "error" : ""}
					/>
					<FontAwesomeIcon
						icon={showPassword ? "eye-slash" : "eye"}
						onClick={togglePasswordVisibility}
						className="eye-icon"
					/>
				</div>

				<span>Confirm your password</span>
				<div className="confirm-password">
					<input
						name="confirmPassword"
						type={showPassword ? "text" : "password"}
						placeholder="IErEaCtEuR2020"
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
						className={passwordError ? "error" : ""}
					/>
					<FontAwesomeIcon
						icon={showPassword ? "eye-slash" : "eye"}
						onClick={togglePasswordVisibility}
						className="eye-icon"
					/>
				</div>
				<input className="submit-button" type="submit" value="Register" />
			</form>
		</>
	);
};

export default Form;
