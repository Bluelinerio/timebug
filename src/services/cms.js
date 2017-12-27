export type Icon = {
  fields: {
    file: {
      url: string
    }
  },
  url?: string
}

export type Assignment = {
  order: number,
  content: string,
  icon: Icon
}

// @flow
export type StepNumber = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30;
export type IColors = {
  phases: {
    MEDITATION: string,
    SELF_ASSESSMENT: string,
    VISION_CREATION: string
  },
  steps: {
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
    StepNumber : string,
  }
}

export type IStep = {
  number: number,
  title: string,
  subtitle: string,
  description: string,
  refAssignment: Array<Assignment>,
  icon: Icon,
  type: string,
  color: ?string,
  duration: number,
  stepScreenDescription: string,
  shortIcon: Icon
}

export const getImageUrl = (icon: Icon): string => (icon.url || icon.fields.file.url || '').replace('//', 'https://')

export const colorForStep = cmsColors => {
	return {
		colorStart: step => cmsColors.steps[step + 1],
		colorEnd: step => {
			const phase = Math.ceil((step + 1) / 10) % 4;
			return cmsColors.phases[phase + 1];
		}
	};
};

export const fixMisingProgressFromServer = items => items

export const sortSteps = (a:Step, b:Step) => a.number - b.number

export const PHASES = ['MEDITATION' , 'SELF_ASSESSMENT', 'VISION_CREATION'];
export const NUMBER_OF_STEP_FOR_PHASES = 10;
export const STEP_START_INDEX = 1;

const phaseForStep = (step:number) => PHASES[Math.floor((step) / NUMBER_OF_STEP_FOR_PHASES) % (PHASES.length)]

export const gradientBackground_ColorForStepIndex = (colors: Colors) => {
  const fn =  ({
		colorStart: (step:number) => colors.steps[step + 1],
		colorEnd: (step:number) => {
			const phase = phaseForStep(step)
			return colors.phases[phase];
		}
  })
  return (step: number) => {
    const colorStart = fn.colorStart(step)
    const colorEnd = fn.colorEnd(step)
    return { colorStart, colorEnd}
  }
}