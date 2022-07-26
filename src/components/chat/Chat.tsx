import { Stack } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ChatBot } from '../../logic/ChatBot'
import { RootState } from '../../store'
import { ChatMessage, ChatUser } from '../../typings/Chat'
import ChatCard from './ui/ChartCard'
import ChatContainer from './ui/ChatContainer'

const Chat = () => {
  const { chatBotData } = useSelector((state: RootState) => state.app)
  const [chatBot, setChatBot] = useState<ChatBot | false>(false)

  const [messages, setMessages] = useState<ChatMessage[]>([])

  const human: ChatUser = {
    name: 'User 1',
    side: 'left',
    img: 'https://avatars.githubusercontent.com/u/7084114?v=4',
  }

  const bot: ChatUser = {
    name: 'User 2',
    side: 'right',
  }

  const handleAnswer = useCallback((newMessages: ChatMessage[]) => {
    setMessages([...newMessages])
  }, [])

  const onFinished = useCallback(() => {
    console.log('Finished')
  }, [])

  useEffect(() => {
    if (!chatBot && chatBotData) {
      const botCreated = new ChatBot(
        chatBotData,
        human,
        bot,
        handleAnswer,
        onFinished
      )
      setChatBot(botCreated)
      setMessages(botCreated.getMessages())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatBotData])

  return (
    <div>
      <ChatContainer title="Chat">
        <Stack spacing={4}>
          {messages.map((msg, msgKey) => (
            <ChatCard key={msgKey} message={msg} />
          ))}
        </Stack>
      </ChatContainer>
    </div>
  )
}

export default Chat
