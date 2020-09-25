import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

const App = () => {
	return (
		<React.Fragment>
			<StatusBar barStyle="light-content" backgroundColor="#6C53A2" />
			<Routes />
		</React.Fragment>
	);
};

export default App;
