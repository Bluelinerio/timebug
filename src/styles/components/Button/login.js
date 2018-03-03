import { facebookColor } from '../../../constants/colors';
import style from './index';

const styles = {
  ...style,
  wideButton: {
    ...style.wideButton,
    borderWidth: 1,
    borderColor: facebookColor
  },
  wideButtonText: {
    ...style.wideButtonText,
    color: facebookColor
  }
};

export default styles;
