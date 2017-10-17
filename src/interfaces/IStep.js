// @flow

import { IAssignment } from "./IAssignment";
import { IIcon }       from "./IIcon";

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
  stepScreenDescription: string,
  shortIcon: IIcon
}