import React from 'react'
import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import styled from 'styled-components'
import { calendarDaysInView } from '../utils/calendarHelpers'

const Timer = () => {
	const dates = calendarDaysInView(2020, 1)

	return (
		<AppSafeAreaView>
			<Calendar>
				<CalendarHeader>
					<Month>February</Month>
				</CalendarHeader>
				<DaysOfWeek>
					<Day>S</Day>
					<Day>M</Day>
					<Day>T</Day>
					<Day>W</Day>
					<Day>T</Day>
					<Day>F</Day>
					<Day>S</Day>
				</DaysOfWeek>
				<DaysOfMonth>
					{dates.map(date => (
						<Day key={date.getTime()}>{date.getDate()}</Day>
					))}
				</DaysOfMonth>
			</Calendar>
		</AppSafeAreaView>
	)
}

const AppSafeAreaView = styled(SafeAreaView)`
	background-color: ${props => props.theme.colors.secondaryAccent950};
	flex: 1;
`

const Calendar = styled(ScrollView)`
	margin: 100px auto 0 auto;
	width: 90%;
`

const CalendarHeader = styled(View)`
	justify-content: center;
	background-color: ${props => props.theme.colors.secondaryAccent500}};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	height: 42px;
	width: 98%;
`

const Month = styled(Text)`
	color: ${props => props.theme.colors.secondaryAccent950}};
	font-size: ${props => props.theme.fontSize.h3}};
	text-align: center;
`
const DaysOfWeek = styled(View)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-bottom: 5%;
	width: 100%;
`

const DaysOfMonth = styled(View)`
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
`

const Day = styled(Text)`
	border: 1px solid ${props => props.theme.colors.secondaryAccent500}};
	color: white;
	flex-basis: 14%;
	padding: 16px;
	text-align: center;
`

export default Timer
