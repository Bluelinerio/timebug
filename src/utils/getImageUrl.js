// @flow

import {IIcon} from "../interfaces";

export default function (field: IIcon): string {
  return field ? field.fields.file.url.replace('//', 'https://') : ''
}