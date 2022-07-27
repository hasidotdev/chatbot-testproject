import { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../constants/chatUsers'
import { ChatBot } from '../../logic/ChatBot'
import { ChatBotAnswer } from '../../logic/ChatBotData'
import { RootState, AppDispatch } from '../../store'
import { actionPostApiData } from '../../store/reducers/app'
import { ChatMessage } from '../../typings/Chat'

export const useChat = () => {
  const { human, bot } = getUsers()

  const { chatBotData } = useSelector((state: RootState) => state.app)
  const [chatBot, setChatBot] = useState<ChatBot | false>(false)

  const [messages, setMessages] = useState<ChatMessage[]>([])

  const { resultPostStatus } = useSelector((state: RootState) => state.app)
  const [showResultApiStatus, setShowResultApiStatus] = useState(false)

  const handleAnswer = useCallback((newMessages: ChatMessage[]) => {
    setMessages([...newMessages])
  }, [])

  const dispatch = useDispatch<AppDispatch>()
  const onFinished = useCallback(
    (answers: ChatBotAnswer[]) => {
      setShowResultApiStatus(true)
      dispatch(actionPostApiData(answers))
    },
    [dispatch]
  )

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

  return {
    messages,
    resultPostStatus,
    showResultApiStatus,
    setShowResultApiStatus,
  }
}
