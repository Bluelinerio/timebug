import React from 'react';
import { View } from 'react-native';
import { phaseProgressStyles as styles } from '../styles';
import PhaseProgress from '../containers/PhaseProgressElementContainer';

export type PhraseProgressListProps = {
  phases: Array<String>,
};

const PhaseProgressList = ({ phases }: PhraseProgressListProps) => {
  return (
    <View style={[styles.listContainer, styles.content]}>
      {phases &&
        phases.map(phase => <PhaseProgress key={phase} phase={phase} />)}
    </View>
  );
};

export default PhaseProgressList;
