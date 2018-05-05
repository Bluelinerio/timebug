//@flow
export const composeSelectors = (selectors: {
  [string]: () => any
}) => (state: {}) => {
  if (__DEV__) {
    const keyForNotAFunction = Object.keys(selectors).find(key => typeof selectors[key] !== 'function')
    if(keyForNotAFunction) {
      throw new Error(`composeSelectors error: expected a function ${keyForNotAFunction} got ${selectors[keyForNotAFunction]}`)
    }
  }
  return Object.keys(selectors).reduce(
    (sum, key) => ({
      ...sum,
      [key]: selectors[key](state)
    }),
    {}
  )
}
