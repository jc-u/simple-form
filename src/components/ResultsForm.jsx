const ResultsForm = ({ formData, button }) => {
	return (
		<>
			<h1>Results</h1>
			<div className="results">
				<div>
					<span>Name : {formData.name}</span>
					<span>Email : {formData.email}</span>
					<span>Password : {formData.password}</span>
				</div>
				<button onClick={button} className="back-button">
					Edit your information
				</button>
			</div>
		</>
	);
};

export default ResultsForm;
