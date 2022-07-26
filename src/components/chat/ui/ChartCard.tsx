import {
  Avatar,
  Button,
  Card,
  CardContent,
  makeStyles,
  Stack,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { ChatUser, ChatMessage } from '../../../typings/Chat'

interface Props {
  user: ChatUser
  content: ChatMessage
  showButtons: boolean
}

const ChatCard = ({ user, content, showButtons }: Props) => {
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
            {(content.buttons.length && showButtons && (
              <Stack direction="row" spacing={2} mt={2}>
                {content.buttons.map((button) => (
                  <Button
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
