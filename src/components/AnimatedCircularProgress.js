// Adapted from https://github.com/bartgryszko/react-native-circular-progress

import React from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing } from 'react-native'
import CircularProgress from './CircularProgress'
const AnimatedProgress = Animated.createAnimatedComponent(CircularProgress)

export default class AnimatedCircularProgress extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			fillAnimation: new Animated.Value(props.prefill),
		}
	}

	componentDidMount() {
		this.animate()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.fill !== this.props.fill) {
			this.animate()
		}
	}

	reAnimate(prefill, toVal, dur, ease) {
		this.setState(
			{
				fillAnimation: new Animated.Value(prefill),
			},
			() => this.animate(toVal, dur, ease)
		)
	}

	animate(toVal, dur, ease) {
		const toValue = toVal >= 0 ? toVal : this.props.fill
		const duration = dur || this.props.duration
		const easing = ease || this.props.easing
		const useNativeDriver = this.props.useNativeDriver

		const anim = Animated.timing(this.state.fillAnimation, {
			duration,
			easing,
			toValue,
			useNativeDriver,
		})
		anim.start(this.props.onAnimationComplete)

		return anim
	}

	animateColor() {
		if (!this.props.tintColorSecondary) {
			return this.props.tintColor
		}

		const tintAnimation = this.state.fillAnimation.interpolate({
			inputRange: [0, 100],
			outputRange: [this.props.tintColor, this.props.tintColorSecondary],
		})

		return tintAnimation
	}

	render() {
		const { children, fill, prefill, ...other } = this.props

		return (
			<AnimatedProgress
				{...other}
				fill={this.state.fillAnimation}
				tintColor={this.animateColor()}
			>
				{children}
			</AnimatedProgress>
		)
	}
}

AnimatedCircularProgress.propTypes = {
	...CircularProgress.propTypes,
	duration: PropTypes.number,
	easing: PropTypes.func,
	onAnimationComplete: PropTypes.func,
	prefill: PropTypes.number,
	useNativeDriver: PropTypes.bool,
}

AnimatedCircularProgress.defaultProps = {
	duration: 500,
	easing: Easing.out(Easing.ease),
	prefill: 0,
	useNativeDriver: false,
}