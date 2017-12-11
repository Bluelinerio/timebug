import { LOAD, SAVE } from 'redux-storage';
 
export default function storeageAwareReducer(state = { loaded: false }, action) {
    switch (action.type) {
        case LOAD:
            return { ...state, loaded: true };
 
        case SAVE:
        default:
            return state;
    }
}
