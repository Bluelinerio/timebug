// @flow
import { mapProps }            from 'recompose'
import CheckinList             from '../components/CheckinList'
import type { CheckinElement } from '../types'

// TODO: Do something with this stuff to build checkin list elements
const merge = (props: CheckinElement) => props

export default mapProps(merge)(CheckinList)
