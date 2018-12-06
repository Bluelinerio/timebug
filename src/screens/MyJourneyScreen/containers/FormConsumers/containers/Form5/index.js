//@flow
import React from 'react';
import { compose } from 'recompose';
import { SelectedKeys } from '../../../types';
import {
  HandlerFunction,
  FormDataForExercise,
} from '../../../../../../HOC/GenericFormConsumer';
import { AwardForStep } from '../../../../../../HOC/AwardProvider';
import getDataFromForm from '../../utils/DataFromForm';
import { buildHeader, buildElements } from '../../utils/FormModelToElement';
import { STEP5, getFormRequestedKeysForStep } from '../../../Forms';
import { HeaderProps } from '../../../../components/GenericHeader';
import { ListElementProps } from '../../../../components/ListElement';

const wantedKeys: SelectedKeys = getFormRequestedKeysForStep(STEP5);

type ComponentDataForForm = {
  recentGoals: any,
};

type PresentationProps = {
  componentData: ComponentDataForForm,
  award: AwardForStep,
};

type ComponentProps = {
  header: HeaderProps,
  elements: ListElementProps,
};

export const handler: HandlerFunction = ({
  formData,
  ...rest
}: FormDataForExercise): PresentationProps => {
  const componentData = getDataFromForm(formData, wantedKeys);
  return {
    componentData,
    ...rest,
  };
};

const transformPropsForPresentation = (
  props: PresentationProps
): ComponentProps => {
  const { componentData, award: { data, model }, ...rest } = props;

  const header = {
    elements: buildHeader(model),
  };

  const { recentGoals } = componentData;

  const componentDataArray = [recentGoals];

  const elements = buildElements({ header, componentDataArray, data });

  return {
    header,
    elements,
    ...rest,
  };
};

const componentPropsHandler = compose(transformPropsForPresentation, handler);

const Form5Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => {
    const providedProps = componentPropsHandler(props);
    return <Component {...props} {...providedProps} />;
  };
  return Consumer;
};

export default Form5Consumer;
