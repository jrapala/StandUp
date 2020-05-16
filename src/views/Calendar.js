import React from 'react'
import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import styled from 'styled-components'
import { calendarDaysInView } from '../utils/calendarHelpers'

const Timer = () => {
	const dates = calendarDaysInView(2020, 4)

	return (
		<AppSafeAreaView>
			<Calendar>
				<CalendarHeader>
					<Month>May</Month>
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
	background-color: ${props => props.theme.primaryColor};
	flex: 1;
`

const Calendar = styled(ScrollView)`
	margin: 100px auto 0 auto;
	width: 90%;
`

const CalendarHeader = styled(View)`
	background-color: ${props => props.theme.accentColor};
	border-top-left-radius: ${props => props.theme.borderRadius.default};
	border-top-right-radius: ${props => props.theme.borderRadius.default};
	height: 42px;
	justify-content: center;
	width: 98%;
`

const Month = styled(Text)`
	color: ${props => props.theme.textColorOnAccent};
	font-size: ${props => props.theme.fontSize.h4};
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
	border: 1px solid ${props => props.theme.accentColor};
	color: ${props => props.theme.textColorOnPrimary};
	flex-basis: 14%;
	padding: 16px;
	text-align: center;
`

export default Timer
