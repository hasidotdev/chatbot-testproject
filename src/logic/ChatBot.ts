import { STR_THANK_YOU } from '../constants/strings'
import { AnswerClickCb, ChatMessage, ChatUser } from '../typings/Chat'
import { ChatBotData } from './ChatBotData'
import { ChatBotStep } from './ChatBotStep'

export class ChatBot {
  private steps: ChatBotStep[] | undefined = undefined

  private currentStep: ChatBotStep | false = false

  private humanUser: ChatUser

  private botUser: ChatUser

  private messages: ChatMessage[] = []

  private onAnswerClickCb: AnswerClickCb

  private onFinishedCb: () => void

  constructor(
    flowData: ChatBotData,
    humanUser: ChatUser,
    botUser: ChatUser,
    onAnswerClickCb: AnswerClickCb,
    onFinishedCb: () => void
  ) {
    this.humanUser = humanUser
    this.botUser = botUser
    this.onAnswerClickCb = onAnswerClickCb
    this.onFinishedCb = onFinishedCb
    try {
      this.steps = flowData.map(
        (singleStepData) => new ChatBotStep(singleStepData)
      )
      if (this.steps.length) {
        this.currentStep = this.steps[0]
      }
    } catch (e) {
      console.error(e)
      throw new Error('Error Creating Chatbot')
    }

    this.addNewBotMessage()
  }

  private findStep(stepIdToBeFound: number): ChatBotStep {
    if (!this.steps) {
      throw new Error('No steps set')
    }

    const step = this.steps.find(
      (possibleStep) => possibleStep.id === stepIdToBeFound
    )

    if (!step) {
      throw new Error(`Cannot find step with id ${stepIdToBeFound}.`)
    }

    return step
  }

  private addAnswerMessage(answerId: number) {
    if (!this.currentStep) {
      throw new Error('Could not store message. No current step available')
    }

    // Unset all buttons
    this.messages.forEach((msg) => (msg.showButtons = false))

    const lastBotMsg = this.messages
      .filter((msg) => msg.user === this.botUser)
      .pop()

    if (!lastBotMsg) {
      return
    }

    this.messages.push({
      user: this.humanUser,
      id: this.messages.length,
      showButtons: false,
      text: lastBotMsg.buttons[answerId].text,
      buttons: [],
    })
  }

  private onAnswerButtonClick(answerId: number) {
    this.answer(answerId)
    this.onAnswerClickCb(this.getMessages())
  }

  private addNewBotMessage() {
    if (!this.currentStep) {
      this.messages.push({
        user: this.botUser,
        id: this.messages.length,
        showButtons: false,
        text: STR_THANK_YOU,
        buttons: [],
      })
      return
    }

    this.messages.push({
      user: this.botUser,
      id: this.messages.length,
      showButtons: true,
      text: this.currentStep.text,
      buttons: this.currentStep.answers.map((answer, answerKey) => ({
        text: answer.text,
        onClick: () => this.onAnswerButtonClick(answerKey),
      })),
    })
  }

  private notifyFinished() {
    this.onFinishedCb()
  }

  public answer(answerId: number) {
    if (!this.currentStep) {
      throw new Error('Cannot answer if no step available')
    }
    this.addAnswerMessage(answerId)

    const nextStepId = this.currentStep.answer(answerId)
    if (nextStepId !== false) {
      this.currentStep = this.findStep(nextStepId)
    } else {
      this.currentStep = false
      this.notifyFinished()
    }
    this.addNewBotMessage()
  }

  public getMessages() {
    return this.messages
  }
}
