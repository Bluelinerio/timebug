// @flow
import * as React from 'react';
import { Text } from 'react-native';
import styles, { grayColor } from './styles/ProgressCell.style';
import PhaseProgressContainer from '../../../../containers/PhaseProgressContainer';
import Cell from './Cell';

const style = {
  highlight: styles.leaderboardContainer,
};

const PieProgressDashboardCell = () => (
  <Cell
    layoutComponent={({ width, ...rest }) => (
      <PhaseProgressContainer width={width} {...rest} />
    )}
    title={'Progress'}
    titleColor={'black'}
    style={style}
  >
    <Text
      style={[
        styles.suggestionText,
        styles.progressUnderlineText,
        {
          color: grayColor,
        },
      ]}
    >
      {`The legend of your progress`}
    </Text>
  </Cell>
);

export default PieProgressDashboardCell;
