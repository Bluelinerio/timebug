// @flow

export type CheckinElement = {
  key: string,
  format: string,
  time: string,
  enabled: boolean,
  filled: boolean,
  data: any,
}

export type Sections = {
  MENU: string,
  CHECK_IN: string,
  WEEKLY: string,
}

export type TimeElement = {
  key: string,
  time: string,
  format: string,
}
