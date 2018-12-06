import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  startColor: string,
  endColor: string,
  children: React.Node | [React.Node],
};

const MeditationScreenBackground = ({
  startColor = 'gray',
  endColor = 'gray',
  children,
}: Props): React.Node => (
  <LinearGradient
    style={{ flex: 1 }}
    colors={[startColor, endColor]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
  >
    {children}
  </LinearGradient>
);

export default MeditationScreenBackground;
