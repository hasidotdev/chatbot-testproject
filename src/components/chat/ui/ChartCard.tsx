import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { ChatMessage } from '../../../typings/Chat'

interface Props {
  message: ChatMessage
}

const ChatCard = ({ message }: Props) => {
  const leftStyle = {
    left: 0,
    transform: 'translate(-33%, -33%)',
  }
  const rightStyle = {
    right: 0,
    transform: 'translate(33%, -33%)',
  }
  const avatarPositionStyle = {
    position: 'absolute',
    ...(message.user.side === 'left' ? leftStyle : rightStyle),
  }

  return (
    <Box position="relative">
      <Avatar
        sx={avatarPositionStyle}
        alt={message.user.name}
        src={message.user.img || ''}
      />
      <Card>
        <CardContent>
          <Box mx={4} textAlign={message.user.side}>
            <Typography color="text.secondary" gutterBottom>
              {message.text}
            </Typography>
            {(message.buttons.length && message.showButtons && (
              <Stack direction="row" spacing={2} mt={2}>
                {message.buttons.map((button, buttonKey) => (
                  <Button
                    key={buttonKey}
                    variant="contained"
                    size="small"
                    onClick={() => (button.onClick ? button.onClick() : false)}
                  >
                    {button.text}
                  </Button>
                ))}
              </Stack>
            )) ||
              null}
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ChatCard
