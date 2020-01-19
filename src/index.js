import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { iOSDarkTheme } from './styles'
import styled, { ThemeProvider } from 'styled-components'

const App = () => {
	return (
		<ThemeProvider theme={iOSDarkTheme}>
			<AppSafeAreaView>
				<MainText>Stand Up</MainText>
			</AppSafeAreaView>
		</ThemeProvider>
	)
}

const AppSafeAreaView = styled(SafeAreaView)`
	align-items: center;
	background-color: ${props => props.theme.colors.primary900};
	flex: 1;
	font-family: ${props => props.theme.font.body};
	justify-content: center;
`

const MainText = styled(Text)`
	color: ${props => props.theme.colors.primary050};
	font-size: ${props => props.theme.fontSize.h1};
`

export default App
