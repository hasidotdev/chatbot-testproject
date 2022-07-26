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
  text: string
  buttons: ChatMessageButton[]
}
