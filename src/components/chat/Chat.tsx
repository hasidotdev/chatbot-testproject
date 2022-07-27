import { Stack } from '@mui/material'
import {
  STR_RESULT_SEND_ERROR,
  STR_RESULT_SEND_FINISHED,
  STR_RESULT_SEND_PENDING,
} from '../../constants/strings'
import ChatApiStatus from './ChatApiStatus'
import { useChat } from './hooks'
import ChatCard from './ui/ChartCard'
import ChatContainer from './ui/ChatContainer'

const Chat = () => {
  const {
    messages,
    resultPostStatus,
    showResultApiStatus,
    setShowResultApiStatus,
  } = useChat()

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
