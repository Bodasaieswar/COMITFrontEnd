import { useState } from 'react';
import ApiInformation from './components/apiInformation';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<ApiInformation />
		</>
	);
}

export default App;
