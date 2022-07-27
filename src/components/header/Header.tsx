import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import {
  STR_HEADER_HEADLINE,
  STR_HEADER_SUBHEADLINE,
} from '../../constants/strings'

const Header = () => (
  <Box my={10} display="flex" flexDirection="column" alignItems="center">
    <Typography variant="h4" component="h1" color="primary">
      {STR_HEADER_HEADLINE}
    </Typography>
    <Typography variant="h6" component="h2" mt={1}>
      {STR_HEADER_SUBHEADLINE}
    </Typography>
  </Box>
)

export default Header
