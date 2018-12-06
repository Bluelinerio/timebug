//@flow
import {
  ADD_GOAL_STEP,
  UPDATE_GOAL_STEP,
  CLEAR_GOAL_STEPS,
  UPDATE_GOAL_STEP_INNER,
} from '../actionTypes';
import { diffObjs } from '../utils/diffObjs';
import R from 'ramda';
import type { UpdateGoalStepAction } from '../actions/goals.actions';

type FormElement = {
  [key: string]: {
    finished: boolean,
  },
};

type Form = {
  timeStamp: number,
  type: any,
  [key: string]: FormElement,
};

type Goal = {
  timeStamp: number,
  id?: string,
  [key: string]: Form,
};

export type GoalState = {
  data: {
    [key: string]: Goal,
  },
};

const initialGoalDataState = {};
const initialState: GoalState = {
  data: initialGoalDataState,
};

const filterWithKeys = (pred, obj) =>
  R.pipe(R.toPairs, R.filter(R.apply(pred)), R.fromPairs)(obj);

const populate = (
  action: UpdateGoalStepAction,
  state: GoalState
): GoalState => {
  const { goalId, formId, value, type } = action.payload;
  const { data } = state;

  const filteredValue = Object.keys(value)
    .filter(key => !(key === 'id' && value[key] === undefined))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: value[key],
      };
    }, {});

  const oldValue = filterWithKeys(key => {
    return Object.keys(filteredValue).includes(key);
  }, R.view(R.lensPath([goalId, formId]), data));

  const { difference, onlyOnRight } = diffObjs(oldValue, filteredValue);

  if (!difference && !onlyOnRight) return state;

  return {
    ...state,
    data: {
      ...data,
      [goalId]: {
        ...(data[goalId] || null),
        timeStamp: Date.now(),
        [formId]: {
          timeStamp: Date.now(),
          ...filteredValue,
          type,
        },
      },
    },
  };
};

const softUpdate = (
  action: UpdateGoalStepAction,
  state: GoalState
): GoalState => {
  const { goalId, formId, value, id } = action.payload;
  const { data } = state;
  const { goalSteps } = data[goalId][formId];
  const newGoalSteps = goalSteps.map(goal => {
    if (goal.id === id)
      return {
        ...goal,
        completed: value,
      };
    return goal;
  });
  return {
    ...state,
    data: {
      ...data,
      [goalId]: {
        ...(data[goalId] || null),
        [formId]: {
          ...(data[goalId][formId] || null),
          goalSteps: newGoalSteps,
        },
      },
    },
  };
};

function GoalReducer(
  state: GoalState = initialState,
  action: { type: string, payload: any }
) {
  switch (action.type) {
  case ADD_GOAL_STEP:
  case UPDATE_GOAL_STEP:
    return populate(action, state);
  case UPDATE_GOAL_STEP_INNER:
    return softUpdate(action, state);
  case CLEAR_GOAL_STEPS:
    return initialState;
  default:
    return state;
  }
}

import storage from 'redux-persist/lib/storage';
import { persistReducer, createMigrate } from 'redux-persist';

const migrations = {
  0: state => state,
};

const persistConfig = {
  key: 'Goals',
  storage: storage,
  blacklist: [],
  version: 1,
  migrate: createMigrate(migrations, { debug: true }),
};

export default persistReducer(persistConfig, GoalReducer);
