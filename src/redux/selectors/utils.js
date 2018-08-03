import R from 'ramda'

export const filterWithKeys = (pred, obj) => R.pipe(R.toPairs, R.filter(R.apply(pred)), R.fromPairs)(obj)

function isPositiveInteger(n) {
	return n >>> 0 === parseFloat(n)
}

export const filterNumbers = (obj: {}) => filterWithKeys(key => isPositiveInteger(key), obj)

export const filterKeys = (keys: [string]) => (obj: {}) => filterWithKeys(key => keys.includes(key), obj)

export const viewOr = R.curryN(3,
  (defaultValue, lens, data) => R.defaultTo(defaultValue, R.view(lens, data))
)