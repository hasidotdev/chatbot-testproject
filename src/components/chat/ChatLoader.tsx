import { Alert, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { actionFetchChatBotData } from '../../store/reducers/app'
import Chat from './Chat'

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
      <Snackbar
        open={
          (showSnackbars && chatBotFetchStatus === 'pending') ||
          chatBotFetchStatus === false
        }
        onClose={() => setShowSnackbars(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert variant="filled" severity="info">
          Lade Chat
        </Alert>
      </Snackbar>
      <Snackbar
        open={showSnackbars && chatBotFetchStatus === 'success'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={2000}
        onClose={() => setShowSnackbars(false)}
      >
        <Alert variant="filled" severity="success">
          Chat geladen
        </Alert>
      </Snackbar>
      <Snackbar
        open={showSnackbars && chatBotFetchStatus === 'error'}
        onClose={() => setShowSnackbars(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert variant="filled" severity="error">
          Fehler beim Laden des Chats
        </Alert>
      </Snackbar>

      {(chatBotData !== false && <Chat />) || null}
    </>
  )
}

export default ChatLoader
