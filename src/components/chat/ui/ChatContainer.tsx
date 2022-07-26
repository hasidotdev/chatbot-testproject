import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

interface Props {
  title: string
  children: React.ReactNode
}

const ChatContainer = ({ title, children }: Props) => (
  <Box display="flex" flexDirection="column" borderRadius={2} overflow="hidden">
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
      }}
      padding={2}
    >
      <Typography>{title}</Typography>
    </Box>
    <Box flex={1} padding={3} sx={{ backgroundColor: grey[200] }}>
      {children}
    </Box>
  </Box>
)

export default ChatContainer
