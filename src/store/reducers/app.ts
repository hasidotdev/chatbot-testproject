import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { REQUEST_CHATBOT_DATA } from '../../constants/actions'
import { ChatBotData } from '../../typings/ChatBotData'

import { fetchChatbotData } from '../../utils/api'

type FetchStatus = false | 'pending' | 'success' | 'error'

interface State {
  chatBotData: ChatBotData | false
  chatBotFetchStatus: FetchStatus
}

const initialState: State = {
  chatBotData: false,
  chatBotFetchStatus: false,
}

// const dummyFetch = async (ms: number): Promise<boolean> => {
//   return new Promise((resolve) =>
//     window.setTimeout(() => {
//       resolve(true)
//     }, ms)
//   )
// }

export const actionFetchChatBotData = createAsyncThunk(
  REQUEST_CHATBOT_DATA,
  async () => fetchChatbotData()
)

// interface SetChatBotDataActionType extends AnyAction {
//   payload: ChatBotData | false
// }
export const AppReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    init: (state) => state,
    // actionSetChatBotData: (state: State, action: SetChatBotDataActionType) => {
    //   state.chatBotData = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actionFetchChatBotData.pending, (state) => {
        state.chatBotData = false
        state.chatBotFetchStatus = 'pending'
      })
      .addCase(actionFetchChatBotData.fulfilled, (state, action) => {
        state.chatBotData = action.payload
        state.chatBotFetchStatus = 'success'
      })
      .addCase(actionFetchChatBotData.rejected, (state) => {
        state.chatBotData = false
        state.chatBotFetchStatus = 'error'
      })
  },
})

export const { init } = AppReducer.actions
export default AppReducer.reducer
