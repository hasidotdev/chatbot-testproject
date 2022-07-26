import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const Header = () => (
  <Box my={10} display="flex" flexDirection="column" alignItems="center">
    <Typography variant="h4" component="h1" color="primary">
      Versicherungs-Chatbot
    </Typography>
    <Typography variant="h6" component="h2" mt={1}>
      Demo-React-App
    </Typography>
  </Box>
)

export default Header
