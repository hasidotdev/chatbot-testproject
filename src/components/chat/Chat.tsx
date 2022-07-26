import { Card, CardContent, Stack, Typography } from '@mui/material'
import { green, orange } from '@mui/material/colors'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ChatBot } from '../../logic/ChatBot'
import { ChatBotStep } from '../../logic/ChatBotStep'
import { RootState } from '../../store'
import { ChatMessage, ChatUser } from '../../typings/Chat'
import ChatCard from './ui/ChartCard'
import ChatContainer from './ui/ChatContainer'

const Chat = () => {
  const USER_ID_BOT = 0
  const USER_ID_USER = 1

  const { chatBotData } = useSelector((state: RootState) => state.app)
  const [chatBot, setChatBot] = useState<ChatBot | false>(false)

  const [currentStepId, setCurrentStepId] = useState<number | false>(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const onStepChangedCb = (newStepId: number | false) => {
    setCurrentStepId(newStepId)
  }

  const handleAnswer = useCallback(
    (answerId: number) => {
      if (!chatBot) {
        throw new Error('No Chatbot set to answer')
      }
      chatBot.answer(answerId)
    },
    [chatBot]
  )

  useEffect(() => {
    console.log('STEP ID CHANGED IN STATE', currentStepId)
    if (currentStepId !== false && chatBot) {
      const step = chatBot.getCurrentStep()
      if (step) {
        setMessages((old: ChatMessage[]) => {
          const botMsgs = old.filter((oldMsg) => oldMsg.userId === USER_ID_BOT)
          const lastBotMessage = botMsgs.length
            ? botMsgs[botMsgs.length - 1]
            : false

          const alreadyAdded =
            lastBotMessage && lastBotMessage.id === currentStepId
          if (alreadyAdded) {
            return old
          }

          return [
            ...old.map((oldStep) => ({ ...oldStep, showButtons: false })),
            {
              id: step.id,
              text: step.text,
              showButtons: true,
              userId: USER_ID_BOT,
              buttons: step.answers.map((answer, buttonId) => ({
                text: answer.text,
                onClick: () => {
                  handleAnswer(buttonId)
                },
              })),
            },
          ]
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStepId, handleAnswer, chatBot])

  useEffect(() => {
    if (!chatBot && chatBotData) {
      const botCreated = new ChatBot(chatBotData, onStepChangedCb)
      setCurrentStepId(botCreated.getCurrentStepId())
      setChatBot(botCreated)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatBotData])

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
          {messages.map((message, messageKey) => (
            <ChatCard
              key={messageKey}
              content={message}
              user={message.userId === USER_ID_BOT ? user2 : user1}
            />
          ))}
          {/* <ChatCard
            content={{
              text: 'Hi there User2 👋',
              buttons: [],
            }}
            user={user1}
            showButtons
          /> */}
          {/* <ChatCard
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
          /> */}
        </Stack>
      </ChatContainer>
    </div>
  )
}

export default Chat
