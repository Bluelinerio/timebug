import { LOAD, SAVE } from 'redux-storage';
import { call, cancelled, put, take, select } from 'redux-saga/effects'
import { store, load} from '../rootReducer';

export default function * loadStorage() {
  yield load(store);
}