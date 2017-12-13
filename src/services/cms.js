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