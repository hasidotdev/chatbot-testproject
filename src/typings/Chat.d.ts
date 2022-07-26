export interface ChatUser {
  name: string
  img?: string
  backgroundColor: string
  color: string
  side: 'left' | 'right'
}

export interface ChatMessageButton {
  text: string
  onClick: () => void
}
export interface ChatMessage {
  userId: number
  id: number
  text: string
  buttons: ChatMessageButton[]
  showButtons: boolean
}
