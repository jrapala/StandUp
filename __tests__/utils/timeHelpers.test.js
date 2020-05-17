import {
	convertMillisecondsToMinutes,
	getPercentComplete,
} from '../../src/utils/timeHelpers'

describe('[convertMillisecondsToMinutes]', () => {
	it('converts milliseconds to a string containing minutes', () => {
		const results = convertMillisecondsToMinutes(90000)
		expect(results).toBe('1:30')
	})
	it('returns an empty string if an argument is not provided', () => {
		const results = convertMillisecondsToMinutes()
		expect(results).toBe('')
	})
})

describe('[getPercentComplete]', () => {
	it('returns the expected output', () => {
		const results = getPercentComplete(50, 100)
		expect(results).toBe(50)
	})
	it('returns zero if an incorrect number of arguments are provided', () => {
		const results = getPercentComplete()
		expect(results).toBe(0)
	})
})
