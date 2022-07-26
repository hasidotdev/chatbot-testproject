import { Stack } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  STR_RESULT_SEND_ERROR,
  STR_RESULT_SEND_FINISHED,
  STR_RESULT_SEND_PENDING,
} from '../../constants/strings'
import { ChatBot } from '../../logic/ChatBot'
import { AppDispatch, RootState } from '../../store'
import { actionPostApiData } from '../../store/reducers/app'
import { ChatMessage, ChatUser } from '../../typings/Chat'
import ChatApiStatus from './ChatApiStatus'
import ChatCard from './ui/ChartCard'
import ChatContainer from './ui/ChatContainer'

const Chat = () => {
  const { chatBotData } = useSelector((state: RootState) => state.app)
  const [chatBot, setChatBot] = useState<ChatBot | false>(false)

  const [messages, setMessages] = useState<ChatMessage[]>([])

  const { resultPostStatus } = useSelector((state: RootState) => state.app)
  const [showResultApiStatus, setShowResultApiStatus] = useState(false)

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

  const dispatch = useDispatch<AppDispatch>()
  const onFinished = useCallback(() => {
    console.log('Finished')
    setShowResultApiStatus(true)
    dispatch(actionPostApiData())
  }, [dispatch])

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
      <ChatApiStatus
        show={showResultApiStatus}
        onClose={() => setShowResultApiStatus(false)}
        status={resultPostStatus}
        text={{
          pending: STR_RESULT_SEND_PENDING,
          success: STR_RESULT_SEND_FINISHED,
          error: STR_RESULT_SEND_ERROR,
        }}
      />
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
