import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import styled from 'styled-components'
import 'react-native-gesture-handler'
import Button from '../components/Button'

const Home = ({ navigation }) => {
	return (
		<AppSafeAreaView>
			<MainText>Stand Up</MainText>
			<Button
				containerStyles={styles.buttonContainer}
				onPress={() => navigation.navigate('Timer')}
			>
				Get Started
			</Button>
		</AppSafeAreaView>
	)
}

const AppSafeAreaView = styled(SafeAreaView)`
	align-items: center;
	background-color: ${props => props.theme.primaryColor};
	flex: 1;
	justify-content: center;
`

const MainText = styled(Text)`
	color: ${props => props.theme.textColorOnPrimary};
	font-size: ${props => props.theme.fontSize.h1};
	font-weight: 500;
`

const styles = StyleSheet.create({
	buttonContainer: {
		bottom: '15%',
		position: 'absolute',
	},
})

export default Home
