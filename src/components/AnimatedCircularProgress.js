// Adapted from https://github.com/bartgryszko/react-native-circular-progress

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing } from 'react-native'
import CircularProgress from './CircularProgress'
const AnimatedProgress = Animated.createAnimatedComponent(CircularProgress)

const propTypes = {
	...CircularProgress.propTypes,
	duration: PropTypes.number,
	easing: PropTypes.func,
	onAnimationComplete: PropTypes.func,
	prefill: PropTypes.number,
	useNativeDriver: PropTypes.bool,
}

const defaultProps = {
	duration: 300,
	easing: Easing.out(Easing.ease),
	prefill: 100,
	useNativeDriver: false,
}

const AnimatedCircularProgress = ({
	children,
	duration,
	easing,
	fill,
	onAnimationComplete,
	prefill,
	tintColor,
	tintColorSecondary,
	...props
}) => {
	const [fillAnimation] = useState(new Animated.Value(prefill))

	useEffect(() => {
		const anim = Animated.timing(fillAnimation, {
			duration,
			easing,
			toValue: fill,
		})
		anim.start(onAnimationComplete)
	}, [duration, easing, fill, fillAnimation, onAnimationComplete])

	const animateColor = () => {
		if (!tintColorSecondary) {
			return tintColor
		}

		const tintAnimation = fillAnimation.interpolate({
			inputRange: [0, 100],
			outputRange: [tintColor, tintColorSecondary],
		})
		return tintAnimation
	}

	return (
		<AnimatedProgress
			{...props}
			fill={fillAnimation}
			tintColor={animateColor()}
		>
			{children}
		</AnimatedProgress>
	)
}

AnimatedCircularProgress.propTypes = propTypes
AnimatedCircularProgress.defaultProps = defaultProps

export default AnimatedCircularProgress
