export function convertMillisecondsToMinutes(ms) {
	if (!ms) {
		return ''
	}
	var minutes = Math.floor(ms / 60000)
	var seconds = ((ms % 60000) / 1000).toFixed(0)
	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export function getPercentComplete(time, startingTime) {
	if (arguments.length !== 2) {
		return 0
	}
	return (time / startingTime) * 100
}
