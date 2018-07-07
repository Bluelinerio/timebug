//@flow
export type Selector = (state: {}, ownProps: {}) => *

export const combineSelectors = (selectors: {}) => (state: {}, ownProps: {}): * => {
  if (__DEV__) {
    const keyForNotAFunction = Object.keys(selectors).find(key => typeof selectors[key] !== 'function')
    if(keyForNotAFunction) {
      throw new Error(`combineSelectors error: expected a function ${keyForNotAFunction} got ${selectors[keyForNotAFunction]}`)
    }
  }
  return Object.keys(selectors).reduce(
    (sum, key) => ({
      ...sum,
      [key]: selectors[key](state, ownProps)
    }),
    {}
  )
}
