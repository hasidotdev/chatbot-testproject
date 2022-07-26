import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  STR_CHAT_LOADED,
  STR_ERROR_LOADING_CHAT,
  STR_LOADING_CHAT,
} from '../../constants/strings'
import { AppDispatch, RootState } from '../../store'
import { actionFetchChatBotData } from '../../store/reducers/app'
import Chat from './Chat'
import ChatApiStatus from './ChatApiStatus'

const ChatLoader = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { chatBotData, chatBotFetchStatus } = useSelector(
    (state: RootState) => state.app
  )

  const [showSnackbars, setShowSnackbars] = useState(true)

  useEffect(() => {
    dispatch(actionFetchChatBotData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [false])

  return (
    <>
      <ChatApiStatus
        show={showSnackbars}
        onClose={() => setShowSnackbars(false)}
        status={chatBotFetchStatus}
        text={{
          pending: STR_LOADING_CHAT,
          success: STR_CHAT_LOADED,
          error: STR_ERROR_LOADING_CHAT,
        }}
      />

      {(chatBotData !== false && <Chat />) || null}
    </>
  )
}

export default ChatLoader
