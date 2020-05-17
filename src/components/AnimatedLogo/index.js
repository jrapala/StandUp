import React, { Fragment } from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'

const logo = require('../../../assets/logo.png')

const AnimatedLogo = ({ opacity, scale, setLogoIsLoaded, translateX }) => (
	<Fragment>
		<StyledAnimatedView style={{ opacity }}>
			<StyledAnimatedImage
				source={logo}
				fadeDuration={0}
				onLoadEnd={() => setLogoIsLoaded(true)}
				style={{ transform: [{ scale }, { translateX }] }}
				resizeMode="contain"
				testID="stand-up-logo"
			/>
		</StyledAnimatedView>
	</Fragment>
)

const StyledAnimatedView = styled(Animated.View)`
	align-items: center;
	background-color: ${props => props.theme.primaryColor};
	bottom: 0;
	flex: 1;
	justify-content: center;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
`

const StyledAnimatedImage = styled(Animated.Image)`
	height: 294px;
	width: 294px;
`
export default AnimatedLogo
