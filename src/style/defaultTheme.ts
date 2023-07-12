import { DefaultTheme } from 'styled-components';

export interface CustomTheme extends DefaultTheme {
  backgroundColor: string;
}

export const lightTheme: CustomTheme = {
  backgroundColor: '#fff'
}

export const darkTheme: CustomTheme = {
  backgroundColor: '#0d1117'
}