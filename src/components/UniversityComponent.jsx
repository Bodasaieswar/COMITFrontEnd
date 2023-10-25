import React from 'react';
import ClinicalTrialCard from './ClinicalTrialCard.jsx';
import SearchTrials from './SearchTrials.jsx';

const UniversityComponent = () => {
	return (
		<div className="d-flex flex-column h-100">
			<div className="bg-red p-3 mb-5">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<span className="text-uppercase heading-style m-0 text-white">
								THE UNIVERSITY OF ARIZONA HEALTH SCIENCES
							</span>
						</div>
					</div>
				</div>
			</div>

			<main
				role="main"
				className="flex-shrink-0"
			>
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<img
								src="src/assets/logo.png"
								alt="Displaying PNG"
								className="col-6"
							/>
						</div>
						<div className="col-12">
							{/* <SearchTrials /> */}
							<ClinicalTrialCard />
						</div>
					</div>
				</div>
			</main>

			<footer className="footer mt-auto bg-warm-gray text-center">
				<div className="container py-4">
					<div className="row">
						<div className="col-12">
							<button className="btn btn-link">Link</button>
							<span> | </span>
							<button className="btn btn-link">Link</button>
							<span> | </span>
							<button className="btn btn-link">Link</button>
							<span> | </span>
							<button className="btn btn-link">Link</button>
							<hr />
							<small className="text-black">
								The University of Arizona
							</small>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default UniversityComponent;
