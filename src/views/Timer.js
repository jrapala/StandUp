import React, { useContext, useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import styled, { ThemeContext } from 'styled-components'
import StartButton from '../components/CircularButton'
import useTimer from '../hooks/useTimer'
import AnimatedCircularProgress from '../components/AnimatedCircularProgress'

const Timer = () => {
	const [time, percentComplete, toggle, isActive] = useTimer(120000)
	const [timerText, setTimerText] = useState(time)
	const themeContext = useContext(ThemeContext)

	return (
		<AppSafeAreaView>
			<DateText>
				{new Date().toLocaleDateString('en-US', {
					day: 'numeric',
					month: 'short',
					weekday: 'long',
					year: 'numeric',
				})}
			</DateText>

			<TimerView>
				<AnimatedCircularProgress
					size={350}
					width={15}
					fill={percentComplete}
					tintColor={themeContext.secondaryColor}
					backgroundColor={themeContext.secondaryColorInverted}
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
				<StartButton onPress={toggle}>
					{isActive ? 'Pause' : 'Start'}
				</StartButton>
			</ButtonView>
		</AppSafeAreaView>
	)
}

const AppSafeAreaView = styled(SafeAreaView)`
	background-color: ${props => props.theme.primaryColor};
	flex: 1;
`

const DateText = styled(Text)`
	color: ${props => props.theme.textColorOnPrimary};
	font-size: ${props => props.theme.fontSize.h4};
	font-weight: ${props => props.theme.fontWeight.semiBold};
	margin-top: 10%;
	text-align: center;
`

const TimerText = styled(Text)`
	color: ${props => props.theme.textColorOnPrimary};
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
