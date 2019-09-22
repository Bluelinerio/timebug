// @flow
import React, { useCallback, useMemo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import selectors from '2020_redux/selectors'
import {
  updateOrCreateCheckin,
  toggleCheckin,
} from '2020_redux/actions/checkin.actions'
import { stepEnum } from '2020_services/cms'
import { TOOL_KEYS } from '2020_static/tools'
import Settings from '../components/Settings'

const SettingsContainer = () => {
  const checkins = useSelector(selectors.getCheckins, shallowEqual)
  const dispatch = useDispatch()

  const checkinsForStep = checkins ? checkins[stepEnum.STEP_22] : null

  const checkin = checkinsForStep
    ? checkinsForStep[TOOL_KEYS.DreamRecordKey]
    : null

  const toggleNotification = useCallback(
    () => {
      if (!checkin) return
      const params = {
        step: stepEnum.STEP_22,
        checkin: {
          ...checkin,
        },
      }
      dispatch(toggleCheckin(params))
    },
    [dispatch, checkin]
  )

  const updateCheckin = useCallback(
    (hourValue: string) => {
      if (!checkin) return
      const params = {
        ...checkin,
        notificationSchedule: {
          ...(checkin.notificationSchedule || {}),
          value: hourValue,
        },
        step: stepEnum.STEP_22,
      }
      dispatch(updateOrCreateCheckin(params))
    },
    [dispatch, checkin]
  )

  const [enabled, value] = useMemo(
    () => {
      if (checkin) {
        const h = checkin.notificationSchedule
          ? checkin.notificationSchedule.value
            ? checkin.notificationSchedule.value
            : checkin.notificationSchedule.default
          : null
        return [!!checkin.id, h]
      }
    },
    [checkin]
  )

  return (
    <Settings
      updateCheckin={updateCheckin}
      toggleNotification={toggleNotification}
      enabled={enabled}
      value={value}
    />
  )
}

export default SettingsContainer
