import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import { green, orange, purple, yellow } from '@mui/material/colors'

interface Props {
  children: React.ReactNode
}

export const chatbotTheme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: '#2167ae',
      // dark: '#23366f',
    },
    secondary: yellow,
  },
})

const CustomThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={chatbotTheme}>
      <>
        <CssBaseline />
        {children}
      </>
    </ThemeProvider>
  )
}

export default CustomThemeProvider
