import { FLOW_URL } from '../constants/api'
import { ChatBotData } from '../logic/ChatBotData'
import { DefaultApi } from './generatedApi'

export type FetchStatus = false | 'pending' | 'success' | 'error'

export const fetchChatbotData = async (): Promise<ChatBotData> => {
  const response = await fetch(FLOW_URL)
  const result = (await response.json()) as ChatBotData
  return result
}

export const postResults = async (): Promise<boolean> => {
  const api = new DefaultApi()

  try {
    const res = await api.postConversation([
      {
        name: 'awefawef',
        value: 'z',
      },
    ])
    if (res.status < 400) {
      return true
    }

    return false
  } catch (e) {
    console.error(e)
    return false
  }
}
