import React, { useEffect, useRef, useState } from 'react'
import {
	Animated,
	Dimensions,
	StatusBar,
	Text,
	TouchableOpacity,
} from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import styled, { ThemeProvider } from 'styled-components'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { iOSDarkTheme } from './styles'
import AnimatedLogo from './components/AnimatedLogo'
import HomeScreen from './views/Home'
import TimerScreen from './views/Timer'
import CalendarScreen from './views/Calendar'

const App = () => {
	const [splashIsVisible, setSplashIsVisible] = useState(true)
	const [logoIsLoaded, setLogoIsLoaded] = useState(false)
	const opacity = useRef(new Animated.Value(1))
	const translateX = useRef(new Animated.Value(0))
	const scale = useRef(new Animated.Value(1))

	const init = () => {
		RNBootSplash.hide()
		Animated.parallel([
			Animated.timing(scale.current, {
				duration: 750,
				toValue: 0.68,
				useNativeDriver: true,
			}),
			Animated.timing(translateX.current, {
				delay: 1000,
				toValue: Dimensions.get('screen').width * 0.3 - 2,
				useNativeDriver: true,
			}),
			Animated.timing(opacity.current, {
				delay: 2000,
				duration: 1000,
				toValue: 0,
				useNativeDriver: true,
			}),
		]).start(() => {
			setSplashIsVisible(false)
		})
	}

	useEffect(() => {
		logoIsLoaded && init()
	}, [logoIsLoaded])

	return (
		<ThemeProvider theme={iOSDarkTheme}>
			<StatusBar barStyle="light-content" />
			<AppContainer />
			{splashIsVisible && (
				<AnimatedLogo
					setLogoIsLoaded={setLogoIsLoaded}
					opacity={opacity.current}
					translateX={translateX.current}
					scale={scale.current}
				/>
			)}
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
				backgroundColor: iOSDarkTheme.primaryColor,
				shadowColor: 'transparent',
			},
			headerTintColor: iOSDarkTheme.textColorOnPrimary,
		},
		initialRouteName: 'Home',
	}
)

const HeaderRight = styled(TouchableOpacity)`
	right: 25%;
`
const StyledText = styled(Text)`
	color: white;
	font-size: ${props => props.theme.fontSize.body};
`
const AppContainer = createAppContainer(AppNavigator)

export default App
