import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { iOSDarkTheme } from './styles'
import styled, { ThemeProvider } from 'styled-components'
// eslint-disable-next-line import/default, import/namespace, import/no-named-as-default, import/no-named-as-default-member
import LinearGradient from 'react-native-linear-gradient'

const App = () => {
	return (
		<ThemeProvider theme={iOSDarkTheme}>
			<Background
				colors={[
					iOSDarkTheme.colors.gradient01,
					iOSDarkTheme.colors.gradient02,
				]}
			>
				<AppSafeAreaView>
					<MainText>Stand Up</MainText>
				</AppSafeAreaView>
			</Background>
		</ThemeProvider>
	)
}

const Background = styled(LinearGradient)`
	flex: 1;
`

const AppSafeAreaView = styled(SafeAreaView)`
	align-items: center;
	flex: 1;
	justify-content: center;
`

const MainText = styled(Text)`
	color: ${props => props.theme.colors.primary050};
	font-size: ${props => props.theme.fontSize.h1};
`

export default App
