import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import ResultsForm from "./components/ResultsForm";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faEye,
	faEyeSlash,
	faKey,
	faListAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash, faKey, faListAlt);

function App() {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formData, setFormData] = useState({});
	const handleFormSubmit = (data) => {
		setFormData(data);
		setFormSubmitted(true);
	};

	// fonction pour revenir au formulaire
	const handleEditClick = () => {
		setFormSubmitted(false); // Réinitialise formSubmitted pour revenir au formulaire
	};

	return (
		<>
			<div className="container">
				{formSubmitted ? (
					<ResultsForm formData={formData} button={handleEditClick} />
				) : (
					<Form onSubmit={handleFormSubmit} />
				)}
			</div>
			<Footer />
		</>
	);
}

export default App;
