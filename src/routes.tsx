import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import CreateEdit from './screens/CreateEdit';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="CreateEdit" component={CreateEdit} />
				<Stack.Screen name="Settings" component={Settings} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
