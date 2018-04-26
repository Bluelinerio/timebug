// from [redooodle](https://github.com/palantir/redoodle/blob/c9c24610c139bca460d818bbba69ad66f43050d8/src/composeReducers.ts)
export function composeReducers(...reducers: [*]) {
  return (state, action) => {
    let nextState = state
    for (let i = 0; i < reducers.length; i++) {
      nextState = reducers[i](nextState, action)
    }
    return nextState
  }
}
