import React from 'react';

const UnderConstruction = () => {
	return (
		<div className="construction-info">
			<h2>Site Information</h2>
			<ul>
				<li>
					<strong>Site Status:</strong> This site is currently under
					construction.
				</li>
				<li>
					<strong>Purpose:</strong> It serves as an endpoint for the
					College of Medicine at the University of Arizona.
				</li>
				<li>
					<strong>Available Endpoints:</strong>
					<ul>
						<li>
							<strong>/api/clinicalTrials:</strong> This endpoint
							fetches all the clinical trials that are open to
							accrual and associated with the University of
							Arizona.
						</li>
						<li>
							<strong>/api/clinicalTrials/&lt;NCTID&gt;:</strong>{' '}
							This specific endpoint retrieves data associated
							with the given clinical trial identified by its
							NCTID.
						</li>
					</ul>
				</li>
			</ul>
			<p>
				Further improvements and enhancements to this site are in
				progress. We're committed to providing comprehensive data and
				serving the needs of our academic community. Please check back
				for regular updates and new features.
			</p>
		</div>
	);
};

export default UnderConstruction;
