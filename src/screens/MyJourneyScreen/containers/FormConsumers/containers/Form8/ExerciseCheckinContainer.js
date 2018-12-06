// @flow
import ExerciseCheckin from '../../components/Form8/ExerciseCheckin';
import type { ExerciseCheckinComponentProps } from '../../components/Form8/ExerciseCheckin';
import { mapProps } from 'recompose';
import moment from 'moment';

export const key = 'exerciseCheckin';

export const fieldKey = 'exercisedToday';

type MergeProps = {
  data:
    | {
        [x: string]: {
          value: Array<{ value: any }>,
        },
      }
    | undefined,
  model: {
    fields: {
      [x: string]: {
        meta: {
          _store: string,
          _date: [boolean, string],
        },
      },
    },
  },
};

const merge = (props: MergeProps): ExerciseCheckinComponentProps => {
  const { data = {}, model } = props;
  const modelField = model.fields[fieldKey];
  const field = data[fieldKey] || {};
  const { value = [] } = field;
  const { meta } = modelField;
  if (meta._store === 'list') {
    const { _date = [true, 'MM/DD/YYYY'] } = meta;
    const displayValue = value.find(
      v => v.date === moment().format(_date[1])
    ) || { value: false };
    return {
      ...props,
      value: displayValue,
      fieldKey,
    };
  }
  return {
    ...props,
    fieldKey,
  };
};

export default mapProps(merge)(ExerciseCheckin);
