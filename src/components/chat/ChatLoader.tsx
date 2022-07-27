import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  STR_FETCH_FINISHED,
  STR_FETCH_ERROR,
  STR_FETCH_PENDING,
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
          pending: STR_FETCH_PENDING,
          success: STR_FETCH_FINISHED,
          error: STR_FETCH_ERROR,
        }}
      />

      {(chatBotData !== false && <Chat />) || null}
    </>
  )
}

export default ChatLoader
