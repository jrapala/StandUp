import React from 'react'
import { iOSDarkTheme } from './styles'
import { ThemeProvider } from 'styled-components'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './views/Home'
import TimerScreen from './views/Timer'

const App = () => {
	return (
		<ThemeProvider theme={iOSDarkTheme}>
			<AppContainer />
		</ThemeProvider>
	)
}

const AppNavigator = createStackNavigator(
	{
		Home: {
			navigationOptions: ({ navigation }) => ({
				headerShown: false,
			}),
			screen: HomeScreen,
		},
		Timer: {
			navigationOptions: ({ navigation }) => ({
				headerShown: false,
			}),
			screen: TimerScreen,
		},
	},
	{
		initialRouteName: 'Home',
	}
)

const AppContainer = createAppContainer(AppNavigator)

export default App
