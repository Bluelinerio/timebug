// @flow

import {IAssignment} from "./IAssignment";

export interface IStep {
  number: number,
  title: string,
  subtitle: string,
  description: string,
  refAssignment: IAssignment[],
  icon: IIcon,
  type: string,
  color: ?string,
  duration: number,
  step_screen_description: string,
  short_icon: IIcon
}