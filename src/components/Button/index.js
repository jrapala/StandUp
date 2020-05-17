import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const Button = ({ children, containerStyles, onPress }) => {
	return (
		<StyledButton
			style={containerStyles}
			activeOpacity={0.75}
			onPress={onPress}
		>
			<StyledText>{children}</StyledText>
		</StyledButton>
	)
}

const StyledButton = styled(TouchableOpacity)`
	align-items: center;
	background-color: ${props => props.theme.secondaryColor};
	border-radius: ${props => props.theme.borderRadius.default};
	height: 50px;
	justify-content: center;
	width: 75%;
`

const StyledText = styled(Text)`
	color: ${props => props.theme.textColorOnSecondary};
	font-size: ${props => props.theme.fontSize.h4};
`

export default Button
