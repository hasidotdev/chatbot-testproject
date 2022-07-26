import { ChatBotData } from './ChatBotData'
import { ChatBotStep } from './ChatBotStep'

export class ChatBot {
  private steps: ChatBotStep[] | undefined = undefined

  private currentStep: ChatBotStep | false = false

  private onStepChangedCb: (newId: number | false) => void

  constructor(
    flowData: ChatBotData,
    onStepChanged: (newId: number | false) => void
  ) {
    this.onStepChangedCb = onStepChanged
    try {
      this.steps = flowData.map(
        (singleStepData) => new ChatBotStep(singleStepData)
      )
      if (this.steps.length) {
        this.currentStep = this.steps[0]
      }

      this.onStepChangedCb(this.getCurrentStepId())
    } catch (e) {
      this.handleError(e as Error)
    }
  }

  private handleError(error: Error) {
    console.error('TODO: HANDLE ERROR', error)
  }

  public getCurrentStepId(): number | false {
    console.log(
      'LE CURR STEP',
      this.currentStep,
      this.currentStep && this.currentStep.id
    )
    if (this.currentStep) {
      return this.currentStep.id
    } else {
      return false
    }
  }

  public getCurrentStep(): ChatBotStep | false {
    return this.currentStep
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

  public answer(answerId: number) {
    if (!this.currentStep) {
      throw new Error('Cannot answer if no step available')
    }
    const nextStepId = this.currentStep.answer(answerId)
    console.log('Next step ID', nextStepId)
    if (nextStepId !== false) {
      const nextStep = this.findStep(nextStepId)
      console.log('Next step found', nextStep)
      this.currentStep = nextStep
    }

    console.log(this.onStepChangedCb)
    this.onStepChangedCb(this.getCurrentStepId())
  }
}
