import React, { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import styled from 'styled-components'
import StartButton from '../components/StartButton'
import useTimer from '../hooks/useTimer'
import AnimatedCircularProgress from '../components/AnimatedCircularProgress'
import { iOSDarkTheme } from '../styles'

const Timer = () => {
	const [time, percentComplete, toggle, isActive] = useTimer(5000)
	const [timerText, setTimerText] = useState(time)

	return (
		<AppSafeAreaView>
			<DateText>
				{new Date().toLocaleDateString(undefined, {
					dateStyle: 'full',
				})}
			</DateText>

			<TimerView>
				<AnimatedCircularProgress
					size={350}
					width={15}
					fill={percentComplete}
					tintColor={iOSDarkTheme.colors.secondaryAccent350}
					backgroundColor={iOSDarkTheme.colors.secondaryAccent800}
					onAnimationComplete={() => {
						if (percentComplete === 0) {
							setTimerText('Done!')
						} else {
							setTimerText(time)
						}
					}}
				>
					<TimerText>{timerText}</TimerText>
				</AnimatedCircularProgress>
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
	height: 60%;
	justify-content: center;
`

const ButtonView = styled(View)`
	align-items: center;
	height: 20%;
	justify-content: center;
`

export default Timer
