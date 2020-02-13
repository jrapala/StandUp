import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { iOSDarkTheme } from './styles'
import styled, { ThemeProvider } from 'styled-components'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './views/Home'
import TimerScreen from './views/Timer'
import CalendarScreen from './views/Calendar'

const App = () => {
	return (
		<ThemeProvider theme={iOSDarkTheme}>
			<AppContainer />
		</ThemeProvider>
	)
}

const AppNavigator = createStackNavigator(
	{
		Calendar: {
			navigationOptions: ({ navigation }) => ({
				headerShown: true,
			}),
			screen: CalendarScreen,
		},
		Home: {
			navigationOptions: ({ navigation }) => ({
				headerShown: false,
			}),
			screen: HomeScreen,
		},
		Timer: {
			navigationOptions: ({ navigation }) => ({
				headerRight: () => (
					<HeaderRight
						onPress={() =>
							navigation.navigate({ routeName: 'Calendar' })
						}
					>
						<StyledText>Calendar</StyledText>
					</HeaderRight>
				),
				headerShown: true,
			}),
			screen: TimerScreen,
		},
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: iOSDarkTheme.colors.secondaryAccent950,
			},
			headerTintColor: iOSDarkTheme.colors.secondaryAccent050,
		},
		initialRouteName: 'Home',
	}
)

const HeaderRight = styled(TouchableOpacity)`
	right: 25%;
`

const StyledText = styled(Text)`
	color: white;
	font-size: ${props => props.theme.fontSize.h4};
`
const AppContainer = createAppContainer(AppNavigator)

export default App
