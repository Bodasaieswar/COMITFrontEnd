import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import UnderConstruction from './UnderConstruction';

const ApiInformation = () => {
	return (
		<div
			className="App"
			style={{
				paddingTop: '5rem',
				paddingLeft: '2rem',
				margin: 'auto 0',
				fontWeight: 'normal',
			}}
		>
			<h1>
				Welcome to the API Endpoint for the College of Medicine at the
				University of Arizona.
			</h1>
			<p>
				<span style={{ color: 'red', fontWeight: 'bold' }}>
					<Typewriter
						words={[
							'Developed by Sai Eswar, Solutions Developer, COMIT, UofA',
						]}
						loop={5}
						cursor
						cursorStyle="_"
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={1000}
						// onLoopDone={handleDone}
						// onType={handleType}
					/>
				</span>
			</p>
			<UnderConstruction />
		</div>
	);
};

export default ApiInformation;
