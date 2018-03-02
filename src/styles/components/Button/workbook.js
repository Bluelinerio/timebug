import { hotPink } from "../../../constants/colors";
import style from "./index";

const styles = {
  ...style,
  wideButton: {
    ...style.wideButton,
    borderColor: hotPink
  },
  wideButtonText: {
    ...style.wideButtonText,
    color: hotPink
  }
};

export default styles;
