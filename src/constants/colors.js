import { Appearance } from 'react-native';

export const isDarkMode = Appearance.getColorScheme() === 'dark';
const colorByTheme = isDarkMode ? '#fff' : '#000'

export const Colors = {
    colorByTheme: colorByTheme
}