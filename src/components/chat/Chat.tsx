import { Card, CardContent, Stack, Typography } from '@mui/material'
import { green, orange } from '@mui/material/colors'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { ChatUser } from '../../typings/Chat'
import ChatCard from './ui/ChartCard'
import ChatContainer from './ui/ChatContainer'

const Chat = () => {
  const { chatBotData } = useSelector((state: RootState) => state.app)

  const user1: ChatUser = {
    backgroundColor: orange[200],
    color: orange[900],
    name: 'User 1',
    side: 'left',
    img: 'https://avatars.githubusercontent.com/u/7084114?v=4',
  }

  const user2: ChatUser = {
    backgroundColor: green[200],
    color: green[900],
    name: 'User 2',
    side: 'right',
  }

  return (
    <div>
      <ChatContainer title="Chat">
        <Stack spacing={4}>
          {/* <ChatCard
            content={{
              text: 'Hi there User2 👋',
              buttons: [],
            }}
            user={user1}
            showButtons
          /> */}
          <ChatCard
            content={{
              text: 'Hi User! Wanna choose from those options?',
              buttons: [
                {
                  text: 'Button1',
                  onClick: () => {},
                },
                {
                  text: 'Button2',
                  onClick: () => {},
                },
              ],
            }}
            user={user2}
            showButtons
          />
        </Stack>
      </ChatContainer>
    </div>
  )
}

export default Chat
