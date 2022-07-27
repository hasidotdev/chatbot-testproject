import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchChatbotData, FetchStatus, postResults } from '../../api/api'
import {
  REQUEST_CHATBOT_DATA,
  REQUEST_POST_RESULT,
} from '../../constants/actions'
import { ChatBotAnswer, ChatBotData } from '../../logic/ChatBotData'

interface State {
  chatBotData: ChatBotData | false
  chatBotFetchStatus: FetchStatus
  resultPostStatus: FetchStatus
}

const initialState: State = {
  chatBotData: false,
  chatBotFetchStatus: false,
  resultPostStatus: false,
}

export const actionFetchChatBotData = createAsyncThunk(
  REQUEST_CHATBOT_DATA,
  async () => fetchChatbotData()
)

export const actionPostApiData = createAsyncThunk(
  REQUEST_POST_RESULT,
  async (answers: ChatBotAnswer[]) => postResults(answers)
)

export const AppReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    init: (state) => state,
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
      .addCase(actionPostApiData.pending, (state) => {
        state.resultPostStatus = 'pending'
      })
      .addCase(actionPostApiData.fulfilled, (state) => {
        state.resultPostStatus = 'success'
      })
      .addCase(actionPostApiData.rejected, (state) => {
        state.resultPostStatus = 'error'
      })
  },
})

export const { init } = AppReducer.actions
export default AppReducer.reducer
