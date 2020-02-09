import { useState, useEffect } from 'react'
import {
	convertMillisecondsToMinutes,
	getPercentComplete,
} from '../utils/timeHelpers'

const useTimer = startingTimeinMS => {
	const [time, setTime] = useState(startingTimeinMS)
	const [isActive, setIsActive] = useState(false)

	function toggle() {
		setIsActive(!isActive)
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

	return [
		convertMillisecondsToMinutes(time),
		getPercentComplete(time, startingTimeinMS),
		toggle,
		isActive,
	]
}

export default useTimer
