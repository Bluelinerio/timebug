//@flow
import React from 'react';
import R from 'ramda';
import { compose } from 'recompose';
import { SelectedKeys } from '../../../types';
import type {
  HandlerFunction,
  FormDataForExercise,
} from '../../../../../../HOC/GenericFormConsumer';
import { STEP2, getFormRequestedKeysForStep } from '../../../Forms';
import getDataFromForm from '../../utils/DataFromForm';

type PillarOfLife = {
  typicalWeek: number,
  idealWeek: number,
};

type PillarsObject = {
  [x: string]: PillarOfLife,
};

type ComponentProps = {
  pillars: PillarsObject,
};

const wantedKeys: SelectedKeys = getFormRequestedKeysForStep(STEP2);

const parseHoursIntoNumber = (hours: any) => {
  const regex = /\d+/;
  const isOne = hours.toLowerCase().includes('one');
  try {
    return isOne ? 1 : parseInt(hours.match(regex));
  } catch (e) {
    return null;
  }
};

export const handler: HandlerFunction = ({ formData }: FormDataForExercise) => {
  const componentData = getDataFromForm(formData, wantedKeys);
  return {
    componentData,
  };
};

const transformPropsForPresentation = ({ componentData }): ComponentProps => {
  if (!componentData || R.isEmpty(componentData)) return {};

  const { typicalWeek, idealWeek } = componentData;

  if (!typicalWeek || !idealWeek) return {};

  const typicalWeekTemplateObject: PillarsObject = typicalWeek.reduce(
    (allPillars, pillar) => {
      const { pillarOfLife, hours } = pillar;
      return {
        ...allPillars,
        [pillarOfLife]: {
          typicalWeek: parseHoursIntoNumber(hours),
        },
      };
    },
    {}
  );

  const steptemplateObject: PillarsObject = idealWeek.reduce(
    (allPillars, pillar) => {
      const { pillarOfLife, hours } = pillar;
      const counterPart = typicalWeekTemplateObject[pillarOfLife]
        ? typicalWeekTemplateObject[pillarOfLife]
        : {};
      return {
        ...allPillars,
        [pillarOfLife]: {
          ...counterPart,
          idealWeek: parseHoursIntoNumber(hours),
        },
      };
    },
    typicalWeekTemplateObject
  );

  return {
    pillars: steptemplateObject,
  };
};

const componentPropsHandler = compose(transformPropsForPresentation, handler);

const Form2Consumer = (
  Component: React.ComponentType<any>
): React.ComponentType<any> => {
  const Consumer = props => (
    <Component {...props} {...componentPropsHandler(props)} />
  );
  return Consumer;
};

export default Form2Consumer;
