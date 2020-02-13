export const calendarDaysInView = (year, month) => {
	/* Create a date. Usually month in JS is 0-11 index based but here is a hack that can be used to calculate total days in a month */
	var date = new Date(year, month + 1, 0)
	/* Get the total number of days in a month */
	const totalDays = date.getDate()
	date.setDate(1)
	/* Start day of month. Like Saturday is start of month etc. 0 means Sunday and 6 means Saturday */
	const startDay = date.getDay()
	/* Here we generate days for 42 cells of a Month */
	const days = []
	/* Here we calculate previous month dates for placeholders if starting day is not Sunday */
	var prevMonthDays = 0
	if (startDay !== 0) {
		prevMonthDays = new Date(year, month, 0).getDate() - startDay
	}
	/* This is placeholder for next month. If month does not end on Saturday, placeholders for next days to fill other cells */
	var count = 0
	// 42 = 7 columns * 6 rows. This is the standard number. Verify it with any standard Calendar
	for (var i = 0; i < 42; i++) {
		var day = {}
		/* So start day is not Sunday, so we can display previous month dates. For that below we identify previous month dates */
		if (i < startDay) {
			prevMonthDays = prevMonthDays + 1
			day.date = new Date(year, month - 1, prevMonthDays)
			/* belong to next month dates. So, month does not end on Saturday. So here we get next month dates as placeholders */
		} else if (i > totalDays + (startDay - 1)) {
			count = count + 1
			day.date = new Date(year, month + 1, count)
			/* belong to current month dates. */
		} else {
			day.date = new Date(year, month, i - startDay + 1)
		}
		days[days.length] = day.date
	}
	return days
}
