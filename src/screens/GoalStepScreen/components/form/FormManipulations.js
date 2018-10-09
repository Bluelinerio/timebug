import R from 'ramda'

export const labelTextLens = R.lensPath(
  'input.props.options.labelText'.split('.')
)
export const valueLens = R.lensPath('input.props.value'.split('.'))
export const optionLabelLens = R.lensPath(
  'input.props.options.label'.split('.')
)
export const ctxLabelLens = R.lensPath('input.props.ctx.label'.split('.'))

export const itemRemoveClickLens = R.lensPath(['buttons', 0, 'click'])

// if item[n].input.props.options.labelText, item[n].input.props.options.labelText
export const setOptionLabelFromItem = (item, replace = null) =>
  R.set(optionLabelLens, replace, item)
export const setCtxLableFromItem = (item, replace = null) =>
  R.set(ctxLabelLens, replace, item)

export const removeLabelFromListItem = R.compose(
  setOptionLabelFromItem,
  setCtxLableFromItem
)
