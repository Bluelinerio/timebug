// @flow

export type WeekDataElement = {
  key: string,
  ideal: {
    text: string,
    value: number,
  },
  current: {
    text: string,
    value: number,
  },
  difference: number,
  storeAwardData: (any, any) => any,
}

export type WorkbookDoneConfig = {
  title: string,
  text: string,
  toolLink?: {
    tool: string,
    text: string,
  },
}
