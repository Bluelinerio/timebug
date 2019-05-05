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
