import { Snackbar, Alert } from '@mui/material'

import { FetchStatus } from '../../api/api'

interface Props {
  text: {
    pending: string
    success: string
    error: string
  }
  show: boolean
  status: FetchStatus
  onClose: () => void
}

const ChatApiStatus = ({ show, status, onClose, text }: Props) => {
  return (
    <>
      <Snackbar
        open={show && (status === 'pending' || status === false)}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert variant="filled" severity="info">
          {text.pending}
        </Alert>
      </Snackbar>
      <Snackbar
        open={show && status === 'success'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={2000}
        onClose={onClose}
      >
        <Alert variant="filled" severity="success">
          {text.success}
        </Alert>
      </Snackbar>
      <Snackbar
        open={show && status === 'error'}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert variant="filled" severity="error">
          {text.error}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ChatApiStatus
