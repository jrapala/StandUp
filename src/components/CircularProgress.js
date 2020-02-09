// Adapted from https://github.com/bartgryszko/react-native-circular-progress

import React from 'react'
import PropTypes from 'prop-types'
import { View, ViewPropTypes } from 'react-native'
import { Svg, Path, G } from 'react-native-svg'

export default class CircularProgress extends React.PureComponent {
	polarToCartesian(centerX, centerY, radius, angleInDegrees) {
		var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
		return {
			x: centerX + radius * Math.cos(angleInRadians),
			y: centerY + radius * Math.sin(angleInRadians),
		}
	}

	circlePath(x, y, radius, startAngle, endAngle) {
		var start = this.polarToCartesian(x, y, radius, endAngle * 0.9999)
		var end = this.polarToCartesian(x, y, radius, startAngle)
		var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'
		var d = [
			'M',
			start.x,
			start.y,
			'A',
			radius,
			radius,
			0,
			largeArcFlag,
			0,
			end.x,
			end.y,
		]
		return d.join(' ')
	}

	clampFill = fill => Math.min(100, Math.max(0, fill))

	render() {
		const {
			size,
			width,
			backgroundWidth,
			tintColor,
			backgroundColor,
			style,
			rotation,
			lineCap,
			arcSweepAngle,
			fill,
			children,
			childrenContainerStyle,
			padding,
		} = this.props

		const maxWidthCircle = backgroundWidth
			? Math.max(width, backgroundWidth)
			: width
		const sizeWithPadding = size / 2 + padding / 2
		const radius = size / 2 - maxWidthCircle / 2 - padding / 2

		const backgroundPath = this.circlePath(
			sizeWithPadding,
			sizeWithPadding,
			radius,
			0,
			arcSweepAngle
		)
		const currentFillAngle = (arcSweepAngle * this.clampFill(fill)) / 100
		const circlePath = this.circlePath(
			sizeWithPadding,
			sizeWithPadding,
			radius,
			0,
			currentFillAngle
		)

		const offset = size - maxWidthCircle * 2

		const localChildrenContainerStyle = {
			...{
				alignItems: 'center',
				borderRadius: offset / 2,
				height: offset,
				justifyContent: 'center',
				left: maxWidthCircle + padding / 2,
				overflow: 'hidden',
				position: 'absolute',
				top: maxWidthCircle + padding / 2,
				width: offset,
			},
			...childrenContainerStyle,
		}

		return (
			<View style={style}>
				<Svg width={size + padding} height={size + padding}>
					<G
						rotation={rotation}
						originX={(size + padding) / 2}
						originY={(size + padding) / 2}
					>
						{backgroundColor && (
							<Path
								d={backgroundPath}
								stroke={backgroundColor}
								strokeWidth={backgroundWidth || width}
								strokeLinecap={lineCap}
								fill="transparent"
							/>
						)}
						{fill > 0 && (
							<Path
								d={circlePath}
								stroke={tintColor}
								strokeWidth={width}
								strokeLinecap={lineCap}
								fill="transparent"
							/>
						)}
					</G>
				</Svg>
				{children && (
					<View style={localChildrenContainerStyle}>{children}</View>
				)}
			</View>
		)
	}
}

CircularProgress.propTypes = {
	arcSweepAngle: PropTypes.number,
	backgroundColor: PropTypes.string,
	backgroundWidth: PropTypes.number,
	childrenContainerStyle: ViewPropTypes.style,
	fill: PropTypes.number.isRequired,
	lineCap: PropTypes.string,
	padding: PropTypes.number,
	rotation: PropTypes.number,
	size: PropTypes.number.isRequired,
	style: ViewPropTypes.style,
	tintColor: PropTypes.string,
	width: PropTypes.number.isRequired,
}

CircularProgress.defaultProps = {
	arcSweepAngle: 360,
	lineCap: 'round',
	padding: 0,
	rotation: 0,
	tintColor: 'black',
}
