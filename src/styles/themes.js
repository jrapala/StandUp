/* eslint-disable sort-keys */
import { purple } from './colors'
import { fontWeight, iOSFontFamily, typeScale } from './typography'

export const iOSDarkTheme = {
	borderRadius: {
		default: '10px',
	},
	accentColor: purple[500],
	textColorOnAccent: purple[950],
	primaryColor: purple[950],
	textColorOnPrimary: purple[50],
	secondaryColor: purple[350],
	secondaryColorInverted: purple[750],
	textColorOnSecondary: purple[950],
	fontSize: typeScale,
	fontWeight,
	primaryFontFamily: iOSFontFamily.body,
	headerFontFamily: iOSFontFamily.header,
}
