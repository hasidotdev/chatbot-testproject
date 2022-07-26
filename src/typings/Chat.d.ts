export interface ChatUser {
  name: string
  img?: string
  side: 'left' | 'right'
}

export type AnswerClickCb = (updatedMessages: ChatMessage[]) => void

export interface ChatMessageButton {
  text: string
  onClick: () => void
}

export interface ChatMessage {
  id: number
  text: string
  buttons: ChatMessageButton[]
  showButtons: boolean
  user: ChatUser
}
