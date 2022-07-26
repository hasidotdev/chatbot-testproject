import { Box, Container } from '@mui/system'

interface Props {
  children: React.ReactNode
}

const Base = ({ children }: Props) => (
  <Container maxWidth="sm">
    <Box>{children}</Box>
  </Container>
)

export default Base
