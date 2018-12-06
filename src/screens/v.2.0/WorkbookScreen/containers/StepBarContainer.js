import StepBar from '../components/StepBar';
import { mapBarStylesHelper } from '../utils/colorsForStep';
import { compose, mapProps } from 'recompose';
import { translateCMSPhaseToStandard } from '../../../../services/cms';
import type { Step } from '../../../../services/cms';
import type { Props as StepBarProps } from '../components/StepBar';

const merge = ({ step }: { step: Step }): StepBarProps => {
  const { title, stepId, type, audio, icon } = step;
  const phase = translateCMSPhaseToStandard(type);
  const barStyle = mapBarStylesHelper(phase);
  return {
    phase,
    title,
    stepId,
    audio: (audio && audio.uri) || undefined,
    source: icon && icon.uri,
    barStyle,
  };
};

export default compose(mapProps(merge))(StepBar);
