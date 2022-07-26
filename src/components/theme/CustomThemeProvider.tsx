import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'

interface Props {
  children: React.ReactNode
}
const CustomThemeProvider = ({ children }: Props) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </ThemeProvider>
  )
}

export default CustomThemeProvider
