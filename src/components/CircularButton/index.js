import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

const CircularButton = ({ children, containerStyles, onPress }) => {
	return (
		<StyledButton
			style={containerStyles}
			activeOpacity={0.75}
			onPress={onPress}
		>
			<Circle>
				<StyledText>{children}</StyledText>
			</Circle>
		</StyledButton>
	)
}

const StyledButton = styled(TouchableOpacity)`
	align-items: center;
	background-color: ${props => props.theme.secondaryColor};
	border-radius: 100px;
	font-weight: 400;
	height: 100px;
	justify-content: center;
	width: 100px;
`

const StyledText = styled(Text)`
	color: ${props => props.theme.textColorOnSecondary};
	font-size: ${props => props.theme.fontSize.h5};
`

const Circle = styled(View)`
	align-items: center;
	border-color: ${props => props.theme.primaryColor};
	border-radius: 100px;
	border-width: 2px;
	height: 90px;
	justify-content: center;
	width: 90px;
`

export default CircularButton
