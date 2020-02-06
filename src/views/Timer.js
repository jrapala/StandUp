import React, { useState, useEffect } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import styled from 'styled-components'

const Timer = () => {
	const [time, setTime] = useState(300000)
	const [isActive, setIsActive] = useState(false)

	function toggle() {
		setIsActive(!isActive)
	}

	function reset() {
		setTime(300000)
		setIsActive(false)
	}

	function convertMilliseconds(ms) {
		var minutes = Math.floor(ms / 60000)
		var seconds = ((ms % 60000) / 1000).toFixed(0)
		return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
	}

	useEffect(() => {
		let interval = null

		if (isActive && time > 0) {
			interval = setInterval(() => {
				setTime(ms => ms - 1000)
			}, 1000)
		} else if (!isActive && time !== 0) {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [isActive, time])

	return (
		<AppSafeAreaView>
			<DateText>
				{new Date().toLocaleDateString(undefined, {
					dateStyle: 'full',
				})}
			</DateText>
			<TimerView>
				<TimerText>{convertMilliseconds(time)}</TimerText>
			</TimerView>
			<Button title={isActive ? 'Pause' : 'Start'} onPress={toggle} />
			<Button title="Reset" onPress={reset} />
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

export default Timer
