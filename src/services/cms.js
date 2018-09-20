// @flow

export const MEDITATION = 'MEDITATION'
export const SELF_ASSESSMENT = 'SELF_ASSESSMENT'
export const VISION_CREATION = 'VISION_CREATION'
export const COMPLETE = 'COMPLETE'

export const PHASES = {
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
  COMPLETE
}

export type Icon = {
  uri: string
}

export type Assignment = {
  order: number,
  content: string,
  icon: Icon
}

export type Phase = MEDITATION | SELF_ASSESSMENT | SELF_ASSESSMENT | COMPLETE

type Numbers1to14 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
type Numbers15to26 = 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26
type Numbers27to30 = 27 | 28 | 29 | 30
// @flow
export type StepNumber = Numbers1to14 & Numbers15to26 & Numbers27to30

export type Colors = {
  phases: {
    MEDITATION: string,
    SELF_ASSESSMENT: string,
    VISION_CREATION: string
  },
  steps: {
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string,
    StepNumber: string
  }
}

export type Step = {
  number: number,
  stepId: string,
  title: string,
  subtitle: string,
  description: string,
  assignments: [Assignment],
  icon: Icon,
  type: string,
  color: ?string,
  duration: number,
  stepScreenDescription: string,
  shortIcon: Icon
}

export type OnobardingPage = {
  title: string,
  slides: [Slide]
}

export type Page = {
  name: string,
  title: string,
  content: string
}

export type Slide = {
  title: string,
  description: string,
  image: Icon,
  order: string
}

export const getImageUrl = (icon: Icon): string =>
  (icon.url || icon.fields.file.url || '').replace('//', 'https://')

export const NUMBER_OF_STEPS = 30
export const NUMBER_OF_STEP_FOR_PHASES = 10
export const STEP_START_INDEX = 1

export const phaseForStepAtIndex = (step: number) => {
  switch (true) {
    case step >= 0 && step < 10:
      return MEDITATION
    case step >= 10 && step < 20:
      return SELF_ASSESSMENT
    case step >= 20 && step < 30:
      return VISION_CREATION
    default:
      return COMPLETE
  }
}

export const phaseNumberForPhase = ({ phase }) => {
  switch (phase) {
    case MEDITATION:
      return 1
    case SELF_ASSESSMENT:
      return 2
    case VISION_CREATION:
      return 3
    default:
      return 0
  }
}

export const phaseForUserForm = ({ stepId }) => {
  switch (true) {
    case stepId > 0 && stepId <= 10:
      return MEDITATION
    case stepId > 10 && stepId <= 20:
      return SELF_ASSESSMENT
    case stepId > 20 && stepId <= 30:
      return VISION_CREATION
    default:
      return COMPLETE
  }
}

export const phaseForStep = ({ number }) => {
  switch (true) {
    case number > 0 && number <= 10:
      return MEDITATION
    case number > 10 && number <= 20:
      return SELF_ASSESSMENT
    case number > 20 && number <= 30:
      return VISION_CREATION
    default:
      return COMPLETE
  }
}

const _isStepCompleted = () => {
  const completionMap = {}
  return (stepNumber, user) => {
    if (completionMap[`${stepNumber}`]) return completionMap[`${stepNumber}`]
    const { forms } = user  
    const completed =
      forms &&
      forms.find(form => {
        if (!completionMap[`${form.stepId}`]) completionMap[`${form.stepId}`] = true
        const value = `${form.stepId}` === `${stepNumber}`
        return value
      })
        ? true
        : false
    if (!completionMap[`${stepNumber}`]) completionMap[`${stepNumber}`] = completed
    return completed
  }
}

export const isStepCompleted = _isStepCompleted()

const getColorStartAtStepIndex = (step: number, colors: Colors) =>
  colors.steps[step + 1]
const getNextPhaseColorForStepAtIndex = (step: number, colors: Colors) =>
  colors.phases[phaseForStepAtIndex(step + NUMBER_OF_STEP_FOR_PHASES)] // next phase color...

export const gradientBackground_ColorForStepIndex = (colors: Colors) => (
  step: number
) => ({
  colorStart: getColorStartAtStepIndex(step, colors),
  colorEnd: getNextPhaseColorForStepAtIndex(step, colors)
})

if (__DEV__) {
  let result = phaseForStepAtIndex(0)
  if (result !== MEDITATION) {
    throw 'phaseForStepAtIndex : wrong result for 0 got: ' +
      result +
      ' expected: ' +
      MEDITATION
  }
  result = phaseForStepAtIndex(1)
  if (result !== MEDITATION) {
    throw 'phaseForStepAtIndex : wrong result for 1 got: ' +
      result +
      ' expected: ' +
      MEDITATION
  }
  result = phaseForStepAtIndex(10)
  if (result !== SELF_ASSESSMENT) {
    throw 'phaseForStepAtIndex : wrong result for 10 got: ' +
      result +
      ' expected: ' +
      SELF_ASSESSMENT
  }
  result = phaseForStepAtIndex(20)
  if (result !== VISION_CREATION) {
    throw 'phaseForStepAtIndex : wrong result for 20 got: ' +
      result +
      ' expected: ' +
      VISION_CREATION
  }
  result = phaseForStepAtIndex(30)
  if (result !== COMPLETE) {
    throw 'phaseForStepAtIndex : wrong result for 30 got: ' +
      result +
      ' expected: ' +
      COMPLETE
  }

  let obj = { steps: { '1': 'success' } }
  result = getColorStartAtStepIndex(0, obj)
  if (result !== 'success') {
    throw 'getColorStartAtStepIndex : wrong result for 0 got: ' +
      result +
      ' with Object ' +
      JSON.stringify(obj)
  }
  obj = { steps: { '11': 'success' } }
  result = getColorStartAtStepIndex(10, obj)
  if (result !== 'success') {
    throw 'getColorStartAtStepIndex : wrong result for 11 got: ' +
      result +
      ' with Object ' +
      JSON.stringify(obj)
  }
  obj = { steps: { '21': 'success' } }
  result = getColorStartAtStepIndex(20, obj)
  if (result !== 'success') {
    throw 'getColorStartAtStepIndex : wrong result for 21 got: ' +
      result +
      ' with Object' +
      JSON.stringify(obj)
  }
  obj = { steps: { '30': 'success' } }
  result = getColorStartAtStepIndex(30, obj)
  if (result) {
    throw 'getColorStartAtStepIndex : wrong result for 30 got: ' +
      result +
      ' with Object' +
      JSON.stringify(obj)
  }

  obj = { phases: { [SELF_ASSESSMENT]: 'success' } }
  result = getNextPhaseColorForStepAtIndex(0, obj)
  if (result !== 'success') {
    throw 'getNextPhaseColorForStepAtIndex wrong result for 0 got ' +
      result +
      ' with Object ' +
      JSON.stringify(obj)
  }
  obj = { phases: { [SELF_ASSESSMENT]: 'success' } }
  result = getNextPhaseColorForStepAtIndex(1, obj)
  if (result !== 'success') {
    throw 'getNextPhaseColorForStepAtIndex wrong result for 1 got ' +
      result +
      ' with Object ' +
      JSON.stringify(obj)
  }
  obj = { phases: { [VISION_CREATION]: 'success' } }
  result = getNextPhaseColorForStepAtIndex(10, obj)
  if (result !== 'success') {
    throw 'getNextPhaseColorForStepAtIndex wrong result for 10 got ' +
      result +
      ' with Object ' +
      JSON.stringify(obj)
  }
  obj = { phases: { [COMPLETE]: 'success' } }
  result = getNextPhaseColorForStepAtIndex(20, obj)
  if (result !== 'success') {
    throw 'getNextPhaseColorForStepAtIndex wrong result for 10 got ' +
      result +
      ' with Object ' +
      JSON.stringify(obj)
  }
  result = getNextPhaseColorForStepAtIndex(30, obj)
  if (!result) {
    throw 'getNextPhaseColorForStepAtIndex wrong result for 30 got ' +
      result +
      ' with Object ' +
      JSON.stringify(obj)
  }

  obj = { steps: { '1': 'success' }, phases: { [SELF_ASSESSMENT]: 'success' } }
  result = gradientBackground_ColorForStepIndex(obj)(0)
  if (result.colorStart !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorStart result for 0 got ' +
      result.colorStart +
      ' with Object ' +
      JSON.stringify(obj)
  } else if (result.colorEnd !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorEnd result for 0 got ' +
      result.colorEnd +
      ' with Object ' +
      JSON.stringify(obj)
  }

  obj = { steps: { '2': 'success' }, phases: { [SELF_ASSESSMENT]: 'success' } }
  result = gradientBackground_ColorForStepIndex(obj)(1)
  if (result.colorStart !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorStart result for 1 got ' +
      result.colorStart +
      ' with Object ' +
      JSON.stringify(obj)
  } else if (result.colorEnd !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorEnd result for 1 got ' +
      result.colorEnd +
      ' with Object ' +
      JSON.stringify(obj)
  }
  obj = {
    steps: { '11': 'success' },
    phases: { [VISION_CREATION]: 'success' }
  }
  result = gradientBackground_ColorForStepIndex(obj)(10)
  if (result.colorStart !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorStart result for 10 got ' +
      result.colorStart +
      ' with Object ' +
      JSON.stringify(obj)
  } else if (result.colorEnd !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorEnd result for 10 got ' +
      result.colorEnd +
      ' with Object ' +
      JSON.stringify(obj)
  }
}
