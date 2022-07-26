import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { ChatUser, ChatMessage } from '../../../typings/Chat'

interface Props {
  user: ChatUser
  content: ChatMessage
}

const ChatCard = ({ user, content }: Props) => {
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
    ...(user.side === 'left' ? leftStyle : rightStyle),
  }

  return (
    <Box position="relative">
      <Avatar sx={avatarPositionStyle} alt={user.name} src={user.img || ''} />
      <Card>
        <CardContent>
          <Box mx={4} textAlign={user.side}>
            <Typography color="text.secondary" gutterBottom>
              {content.text}
            </Typography>
            {(content.buttons.length && content.showButtons && (
              <Stack direction="row" spacing={2} mt={2}>
                {content.buttons.map((button, key) => (
                  <Button
                    key={key}
                    variant="contained"
                    size="small"
                    onClick={button.onClick}
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
