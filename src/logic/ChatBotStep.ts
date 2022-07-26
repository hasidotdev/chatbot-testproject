import { ChatBotStepData } from './ChatBotData'

export class ChatBotStep {
  private data: ChatBotStepData

  private answerId: number | false = false

  constructor(stepData: ChatBotStepData) {
    this.data = stepData
  }

  public answer(answerId: number): number | false {
    const option = this.data.valueOptions[answerId] || false
    if (!option) {
      throw new Error(
        `Invalid AnswerId ${answerId}. Length of answers: ${this.data.valueOptions.length}`
      )
    }
    this.answerId = answerId
    return option.nextId
  }

  public get id() {
    return this.data.id
  }

  public get text() {
    return this.data.text
  }

  public get name() {
    return this.data.name
  }

  public get answers() {
    return this.data.valueOptions
  }

  public getAnswerTextById(answerId: number) {
    const answer = this.data.valueOptions[answerId]
    if (!answer) {
      throw new Error('Invalid Answer ID')
    }
    return this.data.valueOptions[answerId].text
  }

  public get answerUiType() {
    return this.data.uiType
  }
}
