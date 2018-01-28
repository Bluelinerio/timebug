// @flow

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
export type Colors = {
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

export type Step = {
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

const MEDITATION = 'MEDITATION'
const SELF_ASSESSMENT = 'SELF_ASSESSMENT'
const VISION_CREATION = 'VISION_CREATION'
const COMPLETE = 'COMPLETE';

export const NUMBER_OF_STEPS = 30;
export const NUMBER_OF_STEP_FOR_PHASES = 10;
export const STEP_START_INDEX = 1;

export const phaseForStepAtIndex = (step: number) => {
  switch(true) {
    case (step >= 0 && step < 10):
      return MEDITATION
    case (step >= 10 && step < 20):
      return SELF_ASSESSMENT
    case (step >= 20 && step < 30):
      return VISION_CREATION
    default:
      return COMPLETE
  }
}

const getColorStartAtStepIndex = (step: number, colors: Colors) => colors.steps[step + 1]
const getNextPhaseColorForStepAtIndex = (step: number, colors: Colors) => colors.phases[phaseForStepAtIndex(step+ NUMBER_OF_STEP_FOR_PHASES)] // next phase color...

export const gradientBackground_ColorForStepIndex = (colors: Colors) => (step: number) => ({ 
  colorStart: getColorStartAtStepIndex(step, colors), 
  colorEnd: getNextPhaseColorForStepAtIndex(step, colors)
})


const testIndexRange = (index:number, minIndex:number, maxIndex:number) => index=>minIndex && index<=maxIndex;
const testStepIndex = (step:number) => testIndexRange(step,0,NUMBER_OF_STEPS-1);

if (__DEV__) {
  let result = phaseForStepAtIndex(0);
  if (result !==  MEDITATION) {
    throw 'phaseForStepAtIndex : wrong result for 0 got: ' + result + ' expected: ' + MEDITATION;
  }
  result = phaseForStepAtIndex(1);
  if (result !==  MEDITATION) {
    throw 'phaseForStepAtIndex : wrong result for 1 got: ' + result + ' expected: ' + MEDITATION;
  }
  result = phaseForStepAtIndex(10);
  if (result !==  SELF_ASSESSMENT) {
    throw 'phaseForStepAtIndex : wrong result for 10 got: ' + result + ' expected: ' + SELF_ASSESSMENT;
  }
  result = phaseForStepAtIndex(20);
  if (result !==  VISION_CREATION) {
    throw 'phaseForStepAtIndex : wrong result for 20 got: ' + result + ' expected: ' + VISION_CREATION;
  }
  result = phaseForStepAtIndex(30);
  if (result !==  COMPLETE) {
    throw 'phaseForStepAtIndex : wrong result for 30 got: ' + result + ' expected: ' + COMPLETE;
  }

  let obj = { steps : { '1': 'success'} }
  result = getColorStartAtStepIndex(0, obj);
  if (result !==  'success') {
    throw 'getColorStartAtStepIndex : wrong result for 0 got: ' + result + ' with Object ' + JSON.stringify(obj);
  }
  obj = { steps : { '11': 'success'}}
  result = getColorStartAtStepIndex(10, obj);
  if (result !==  'success') {
    throw 'getColorStartAtStepIndex : wrong result for 11 got: ' + result + ' with Object ' + JSON.stringify(obj);
  }
  obj = { steps : { '21': 'success'}}
  result = getColorStartAtStepIndex(20, obj);
  if (result !==  'success') {
    throw 'getColorStartAtStepIndex : wrong result for 21 got: ' + result + ' with Object' + JSON.stringify(obj);
  }
  obj = { steps : { '30': 'success'}}
  result = getColorStartAtStepIndex(30, obj)
  if (!!result) {
    throw 'getColorStartAtStepIndex : wrong result for 30 got: ' + result + ' with Object' + JSON.stringify(obj) ;
  }
  
  obj = { phases : { [SELF_ASSESSMENT]: 'success'}};
  result = getNextPhaseColorForStepAtIndex(0, obj)
  if (result !==  'success') {
    throw 'getNextPhaseColorForStepAtIndex wrong result for 0 got ' + result + ' with Object ' + JSON.stringify(obj) ;
  }
  obj = { phases : { [SELF_ASSESSMENT]: 'success'}};
  result = getNextPhaseColorForStepAtIndex(1, obj)
  if (result !==  'success') {
    throw 'getNextPhaseColorForStepAtIndex wrong result for 1 got ' + result + ' with Object ' + JSON.stringify(obj) ;
  }
  obj = { phases : { [VISION_CREATION]: 'success'}};
  result = getNextPhaseColorForStepAtIndex(10, obj)
  if (result !==  'success') {
    throw 'getNextPhaseColorForStepAtIndex wrong result for 10 got ' + result + ' with Object ' + JSON.stringify(obj) ;
  }
  obj = { phases : { [COMPLETE]: 'success'}};
  result = getNextPhaseColorForStepAtIndex(20, obj)
  if (result !==  'success') {
    throw 'getNextPhaseColorForStepAtIndex wrong result for 10 got ' + result + ' with Object ' + JSON.stringify(obj) ;
  }
  result = getNextPhaseColorForStepAtIndex(30, obj)
  if (!result) {
    throw 'getNextPhaseColorForStepAtIndex wrong result for 30 got ' + result + ' with Object ' + JSON.stringify(obj);
  }

  obj = { steps : { '1': 'success'} , phases : { [SELF_ASSESSMENT]: 'success'}};
  result = gradientBackground_ColorForStepIndex(obj)(0)
  if(result.colorStart !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorStart result for 0 got ' + result.colorStart + ' with Object ' + JSON.stringify(obj);
  } else if(result.colorEnd !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorEnd result for 0 got ' + result.colorEnd + ' with Object ' + JSON.stringify(obj);
  }

  obj = { steps : { '2': 'success'} , phases : { [SELF_ASSESSMENT]: 'success'}};
  result = gradientBackground_ColorForStepIndex(obj)(1)
  if(result.colorStart !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorStart result for 1 got ' + result.colorStart + ' with Object ' + JSON.stringify(obj);
  } else if(result.colorEnd !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorEnd result for 1 got ' + result.colorEnd + ' with Object ' + JSON.stringify(obj);
  }
  obj = { steps : { '11': 'success'} , phases : { [VISION_CREATION]: 'success'}};
  result = gradientBackground_ColorForStepIndex(obj)(10)
  if(result.colorStart !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorStart result for 10 got ' + result.colorStart + ' with Object ' + JSON.stringify(obj);
  } else if(result.colorEnd !== 'success') {
    throw 'gradientBackground_ColorForStepIndex wrong colorEnd result for 10 got ' + result.colorEnd + ' with Object ' + JSON.stringify(obj);
  }

}
