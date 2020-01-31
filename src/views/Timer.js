import React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'

const Timer = () => {
	return <AppSafeAreaView />
}

const AppSafeAreaView = styled(SafeAreaView)`
	align-items: center;
	background-color: ${props => props.theme.colors.secondaryAccent950};
	flex: 1;
	justify-content: center;
`

export default Timer
