import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useEffect, useRef } from 'react'
import { createUseStyles } from 'react-jss'

interface Props {
  title: string
  children: React.ReactNode
}

const ChatContainer = ({ title, children }: Props) => {
  const containerRef = useRef<null | HTMLDivElement>(null)

  const MAX_HEIGHT = 500

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [children])

  const useStyles = createUseStyles({
    scrollBox: {
      maxHeight: MAX_HEIGHT,
      overflow: 'scroll',
      padding: 20,
    },
  })

  const classes = useStyles()

  return (
    <Box
      display="flex"
      flexDirection="column"
      borderRadius={2}
      overflow="hidden"
    >
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          color: 'white',
        }}
        padding={2}
      >
        <Typography>{title}</Typography>
      </Box>
      <Box flex={1} sx={{ backgroundColor: grey[200], maxHeight: MAX_HEIGHT }}>
        <div ref={containerRef} className={classes.scrollBox}>
          {children}
        </div>
      </Box>
    </Box>
  )
}

export default ChatContainer
