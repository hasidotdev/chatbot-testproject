import { ChatUser } from '../typings/Chat'

export const getUsers = (): Record<string, ChatUser> => {
  const human: ChatUser = {
    name: 'Human',
    side: 'left',
    img: 'https://avatars.githubusercontent.com/u/7084114?v=4',
  }

  const bot: ChatUser = {
    name: 'Bot',
    side: 'right',
  }

  return { human, bot }
}
