import { ENV, TESTUSERID } from '../../config.json'

// There will be a race condition between fetching the cms and the previous version, but we assume that it's going to be faster to rehydrate than to call the cms.
export const persistConfig = {
  key: 'beta1',
  whitelist: ['formData', 'nav' , 'cms' ],
}

// type PersistConfig = {
//   key: string, // the key for the persist
//   storage: Object, // the storage adapter, following the AsyncStorage api
//   version?: number, // the state version as an integer (defaults to -1)
//   blacklist?: Array<string>, // do not persist these keys
//   whitelist?: Array<string>, // only persist these keys
//   migrate?: (Object, number) => Promise<Object>,
//   transforms?: Array<Transform>,
//   throttle?: number,
//   keyPrefix?: string, // will be prefixed to the storage key
//   debug?: boolean, // true -> verbose logs
//   stateReconciler?: false | StateReconciler, // false -> do not automatically reconcile state
//   serialize?: boolean, // false -> do not call JSON.parse & stringify when setting & getting from storage
// }



export const ENVIRONMENT = ENV
export const USER_ID = TESTUSERID 