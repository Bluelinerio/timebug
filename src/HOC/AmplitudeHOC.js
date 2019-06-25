// @flow
import { log } from '2020_services/amplitude'
import { mapProps } from 'recompose'

export type ExposedProps = {
    amplitudeLog: (string, any) => void
}

const merge = (props: any) => {
  const amplitudeLog = log
  return {
    amplitudeLog,
    ...props,
  }
}

export const withAmplitudeLog = mapProps(merge)
