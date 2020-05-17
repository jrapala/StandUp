import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'
import 'react-native-gesture-handler'
import Giraffe from '../images/Giraffe'

import Button from '../components/Button'

const Home = ({ navigation }) => {
	return (
		<AppSafeAreaView>
			<Logo>
				<LogoText>Stand Up</LogoText>
				<Giraffe height={200} style={styles.logoImage} />
			</Logo>
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

const LogoText = styled(Text)`
	color: ${props => props.theme.textColorOnPrimary};
	font-size: ${props => props.theme.fontSize.h2};
	font-weight: ${props => props.theme.fontWeight.bold};
`
const Logo = styled(View)`
	align-items: flex-end;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 10px;
	margin-left: 30%;
	width: 100%;
`

const styles = StyleSheet.create({
	buttonContainer: {
		bottom: '15%',
		position: 'absolute',
	},
	logoImage: {
		marginLeft: '-30%',
	},
})

export default Home
