import React from 'react';
import { PHASES, COMPLETE } from '../../../services/cms';
import PhaseProgressListComponent, {
  PhraseProgressListProps,
} from '../components/PhaseProgressList';

const PhaseProgressContainer = (props: any): PhraseProgressListProps => {
  const phases = Object.values(PHASES).filter(phase => phase !== COMPLETE);
  return <PhaseProgressListComponent phases={phases} {...props} />;
};

export default PhaseProgressContainer;
