import R from 'ramda'

export const dataLens = R.lensProp('data')

export const formLens = ({ stepId, formId }) => R.compose(
  dataLens,
  R.lensPath([
    stepId, formId
  ])
)

const noop = a => a
const isNotAnObject = R.or(
  R.isNil, 
  R.not(R.is(Object))
)

export const formTimeStampLens = prop => R.compose(
  R.cond([
    [
      isNotAnObject,
      R.always(noop)
    ],
    [
      R.both(R.has('stepId'), R.has('formId')),
      ({ stepId, formId}) => R.compose(
        dataLens,
        R.lensPath([stepId, formId])
      )
    ],
    [
      R.has('stepId'),
      ({ stepId}) => R.compose(
        dataLens,
        R.lensProp(stepId)
      )
    ],
  ])(prop),
  R.lensProp('timeStamp')
)