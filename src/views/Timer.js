import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import styled from 'styled-components'
import StartButton from '../components/StartButton'
import useTimer from '../hooks/useTimer'

const Timer = () => {
	const [time, toggle, isActive] = useTimer(300000)

	return (
		<AppSafeAreaView>
			<DateText>
				{new Date().toLocaleDateString(undefined, {
					dateStyle: 'full',
				})}
			</DateText>

			<TimerView>
				<TimerText>{time}</TimerText>
			</TimerView>
			<ButtonView>
				<StartButton onPress={toggle} componentTheme="light">
					{isActive ? 'Pause' : 'Start'}
				</StartButton>
			</ButtonView>
		</AppSafeAreaView>
	)
}

const AppSafeAreaView = styled(SafeAreaView)`
	background-color: ${props => props.theme.colors.secondaryAccent950};
	flex: 1;
`

const DateText = styled(Text)`
	color: ${props => props.theme.colors.secondaryAccent050};
	font-size: ${props => props.theme.fontSize.h2};
	font-weight: 500;
	margin-left: 40px;
	margin-top: 10%;
`

const TimerText = styled(Text)`
	color: ${props => props.theme.colors.secondaryAccent050};
	font-size: ${props => props.theme.fontSize.timer};
`
const TimerView = styled(View)`
	align-items: center;
	height: 50%;
	justify-content: center;
`

const ButtonView = styled(View)`
	align-items: center;
	height: 30%;
	justify-content: center;
`

export default Timer
