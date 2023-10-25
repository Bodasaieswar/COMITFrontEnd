import React, { useState, useEffect } from 'react';

const ClinicalTrialCard = () => {
	const [showLocations, setShowLocations] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const id = 'NCT00896935';

	useEffect(() => {
		// The URL endpoint
		const url = `https://www.bodasaieswar.info/api/clinicalTrails/${id}`;

		// Fetch the data
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => setData(data))
			.catch((err) => setError(err));
	}, [id]);

	const formatAgeSentence = () => {
		const { MinimumAge, MaximumAge } = data;

		if (MinimumAge && MaximumAge) {
			return `For people ages ${MinimumAge} to ${MaximumAge} years`;
		} else if (MinimumAge) {
			return `For people ages ${MinimumAge} years and up`;
		} else if (MaximumAge) {
			return `For people up to ${MaximumAge}`;
		} else {
			return `No age Limit`; // default case
		}
	};

	const extractCriteria = (type) => {
		const splitData = data.EligibilityCriteria.split('Exclusion Criteria:');
		const criteria = type === 'Inclusion' ? splitData[0] : splitData[1];
		const criteriaList = criteria
			.split('\n\n')
			.filter((item) => item.trim() !== '');

		if (type === 'Inclusion') {
			criteriaList.shift(); // Removing the "Inclusion Criteria:" header
		}

		return criteriaList;
	};

	const inclusionCriteria = extractCriteria('Inclusion');
	const exclusionCriteria = extractCriteria('Exclusion');

	const formatDate = (dateString) => {
		const options = { month: 'long', year: 'numeric' };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	const locations = [
		{
			name: 'University of California Irvine Medical Center',
			status: 'accepting new patients',
			address: 'Orange, California, 92868, United States',
		},
		{
			name: 'Velocity Clinical Research, Coastal Heart Medical Group',
			status: 'accepting new patients',
			address: 'Santa Ana, California, 92704, United States',
		},
		// ... Add other locations here
	];

	return (
		<div className="study-card">
			<h2>{data.BriefTitle}</h2>
			<h2>a study on Heart Failure</h2>
			<hr />
			<div className="study-details">
				<div className="detail font-weight-bold">
					<span
						role="img"
						aria-label="age"
						className="mr-2"
					>
						👥
					</span>
					{formatAgeSentence()}
				</div>
				<div className="detail">
					<span
						role="img"
						aria-label="location"
						className="mr-2"
					>
						📍
					</span>
					at The University of Arizona
				</div>
				<div className="detail">
					<span
						role="img"
						aria-label="calendar"
						className="mr-2"
					>
						📅
					</span>
					study started {formatDate(data.StartDate)} <br />
					<div className="">
						estimated completion{' '}
						{formatDate(data.PrimaryCompletionDate)}
					</div>
				</div>
				<div>
					{data.OverallOfficialName && (
						<div className="detail">
							<span
								role="img"
								aria-label="person"
								className="mr-2"
							>
								👤
							</span>
							by {data.OverallOfficialName}
						</div>
					)}
				</div>
			</div>

			<hr />

			<div className="study-description">
				<h3>Description</h3>
				<h4>SUMMARY</h4>
				<p>{data.BriefSummary}</p>
				<h4>OFFICIAL TITLE</h4>
				<p>{data.OfficialTitle}</p>
			</div>
			<hr />

			<div className="study-eligibility">
				<h2>Eligibility</h2>

				<div className="eligibility-section">
					<h3>
						<span
							role="img"
							aria-label="checkmark"
						>
							✔️
						</span>{' '}
						YOU CAN JOIN IF...
					</h3>
					<ul>
						{inclusionCriteria.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>

				<div className="eligibility-section">
					<h3>
						<span
							role="img"
							aria-label="crossmark"
						>
							❌
						</span>{' '}
						YOU CAN'T JOIN IF...
					</h3>
					<ul>
						{exclusionCriteria.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
			<hr />
			<div className="study-info">
				<section className="locations">
					<h2>Locations</h2>
					{locations.map((loc, index) => (
						<p key={index}>
							{loc.name} <span>{loc.status}</span>
							<br />
							{loc.address}
						</p>
					))}
				</section>

				<hr />

				<section className="lead-scientist">
					<h2>Lead Scientist at University of California Health</h2>
					<h3>Andy Yen-Tang Lee (UCI)</h3>
					<p>
						Assistant Health Sciences Professor, Medicine, School of
						Medicine
					</p>
				</section>

				<hr />

				<section className="details">
					<h2>Details</h2>
					<dl>
						<dt>Status</dt>
						<dd>accepting new patients</dd>
						<dt>Start Date</dt>
						<dd>February 2023</dd>
						<dt>Completion Date</dt>
						<dd>January 2025 (estimated)</dd>
						<dt>Sponsor</dt>
						<dd>Eli Lilly and Company</dd>
						<dt>Links</dt>
						<dd>
							<a href="#">
								A Study of LY3540378 in Participants With
								Worsening Chronic Heart Failure With Preserved
								Ejection Fraction (HFpEF)
							</a>
						</dd>
						<dt>ID</dt>
						<dd>NCT05592275</dd>
						<dt>Phase</dt>
						<dd>Phase 2 Heart Failure Research Study</dd>
						<dt>Study Type</dt>
						<dd>Interventional</dd>
						<dt>Participants</dt>
						<dd>Expecting 432 study participants</dd>
					</dl>
				</section>
			</div>
			<hr />
			<button>Back</button>
		</div>
	);
};

export default ClinicalTrialCard;
