import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import ResultsForm from "./components/ResultsForm";

function App() {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const handleFormSubmit = (data) => {
		setFormData(data);
		setFormSubmitted(true);
	};

	return (
		<>
			<div className="container">
				{formSubmitted ? (
					<ResultsForm formData={formData} />
				) : (
					<Form onSubmit={handleFormSubmit} />
				)}
			</div>
		</>
	);
}

export default App;
