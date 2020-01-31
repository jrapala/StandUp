import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const Button = ({ children, componentTheme, containerStyles, onPress }) => {
	return (
		<StyledButton
			style={containerStyles}
			componentTheme={componentTheme}
			activeOpacity={0.75}
			onPress={onPress}
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
	height: 50px;
	justify-content: center;
	width: 75%;
`

const StyledText = styled(Text)`
	color: ${props =>
		props.componentTheme === 'dark'
			? props.theme.colors.primary100
			: props.theme.colors.primary700};
	font-size: ${props => props.theme.fontSize.h3};
`

export default Button
