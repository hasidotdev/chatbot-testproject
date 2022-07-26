export type ChatBotValueType = 'number' | 'string' | 'boolean'

export interface ChatBotValueOption {
  nextId: number | false
  value: string | number | boolean
  text: string
}
export interface ChatBotStep {
  id: number
  name: string
  text: string
  uiType: 'button'
  valueType: ChatBotValueType
  valueOptions: ChatBotValueOption[]
}

export type ChatBotData = ChatBotStep[]
