import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import { yellow } from '@mui/material/colors'

interface Props {
  children: React.ReactNode
}

export const chatbotTheme = createTheme({
  palette: {
    primary: {
      main: '#2167ae',
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
