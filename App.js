import React from 'react';
import routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/containers/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.HOME}
        headerMode='none'
      >
        <Stack.Screen name={routes.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;