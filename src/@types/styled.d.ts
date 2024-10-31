import 'styled-components'
import type { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-componentes' {
  export interface DefaultTheme extends ThemeType {}
}
