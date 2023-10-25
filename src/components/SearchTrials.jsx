import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchTrials = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [trials, setTrials] = useState([]);

	useEffect(() => {
		fetch('https://www.bodasaieswar.info/api/clinicalTrails', {
			method: 'GET',
			// mode: 'no-cors',
		})
			.then((response) => response.json())
			.then((data) => setTrials(data))
			.catch((error) => console.error('Error fetching data:', error));
	}, []);

	const filteredTrials = trials.filter((trial) =>
		trial.OfficialTitle.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div>
			<div>
				<h2>Search Trials</h2>
				<input
					type="text"
					placeholder="Search..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>

			<div>
				{filteredTrials.map((trial) => (
					<TrialSummary
						key={trial.NCTId}
						trial={trial}
					/>
				))}
			</div>
		</div>
	);
};

const TrialSummary = ({ trial }) => {
	const [showMore, setShowMore] = useState(false);
	const truncatedLength = 300; // truncate to the first 300 characters for example
	const truncatedSummary = trial.BriefSummary.slice(0, truncatedLength);

	return (
		<div>
			<h3>{trial.OfficialTitle}</h3>
			<p>
				{showMore ? trial.BriefSummary : `${truncatedSummary} `}
				{trial.BriefSummary.length > truncatedLength && !showMore && (
					<button onClick={() => setShowMore(true)}>Show More</button>
				)}
			</p>
			<hr />
		</div>
	);
};

export default SearchTrials;
