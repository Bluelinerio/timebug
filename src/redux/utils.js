// @flow
export const action = (type: string, payload: any = {}) => ({ type, ...payload })

export type RunnableActionType = {
	action: () => ({ type: string}),
	type: string
}

export const runnableAction = (type: string): RunnableActionType => ({
	action: () => action(type),
	type
})

export const createActionsObject = (base, ...types) => {
	return types.reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}