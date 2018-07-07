import R from 'ramda'
//ACTIONS:
export const NavigationActionStepIdLens = R.lensPath(['params', 'stepId'])
export const NavigationActionFormIdLens = R.lensPath(['params', 'formId'])
export const NavigationActionRouteNameLens = R.lensPath(['routeName'])
