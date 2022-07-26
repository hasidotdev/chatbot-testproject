import { FLOW_URL } from '../constants/api'
import { ChatBotData } from '../logic/ChatBotData'

export const fetchChatbotData = async (): Promise<ChatBotData> => {
  const response = await fetch(FLOW_URL)
  const result = (await response.json()) as ChatBotData
  return result
}
