import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const Button = ({ children, componentTheme, containerStyles }) => {
	return (
		<StyledButton
			style={containerStyles}
			componentTheme={componentTheme}
			activeOpacity={0.75}
		>
			<StyledText componentTheme={componentTheme}>{children}</StyledText>
		</StyledButton>
	)
}

const StyledButton = styled(TouchableOpacity)`
	align-items: center;
	background-color: ${props =>
		props.componentTheme === 'dark'
			? props.theme.colors.primary700
			: props.theme.colors.primary100};
	border-radius: ${props => props.theme.borders.borderRadius};
	font-weight: 400;
	justify-content: center;
	height: 50px;
	width: 75%;
`

const StyledText = styled(Text)`
	font-size: ${props => props.theme.fontSize.h3};
	color: ${props =>
		props.componentTheme === 'dark'
			? props.theme.colors.primary100
			: props.theme.colors.primary700};
`

export default Button
