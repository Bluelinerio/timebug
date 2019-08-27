// @flow
import React, { useContext, useEffect, useCallback, useMemo } from 'react'
import { shallowEqual, useSelector }                          from 'react-redux'
import { ItemType }                                           from 'react-native-forms/types/formTypes'
import selectors                                              from '2020_redux/selectors'
import { ScreenContext }                                      from '../../context/ScreenContext'
import { ToolDataContext }                                    from '../../context/ToolDataProvider'
import { FormContext }                                        from '../../context/FormContext'
import { getCategories }                                      from '../../context/CategoryContext'
import { FORM_KEYS }                                          from '../../static/form'
import FormWrapper                                            from '../components/FormWrapper'

const FormWrapperContainer = () => {
  const {
    baseValues,
    editionId,
    setBaseValues,
    newFormMounted,
    setFormEdition,
  } = useContext(FormContext)
  const { data, storeData } = useContext(ToolDataContext)
  const { openGoalList } = useContext(ScreenContext)

  const completedSteps = useSelector(selectors.getCompletedSteps, shallowEqual)
  const categories = useMemo(() => getCategories(completedSteps), [
    completedSteps,
  ])

  const value = data ? data.value : {}
  const formValue = value ? value.form : null

  useEffect(() => {
    newFormMounted()
    return () => {
      setFormEdition(null)
    }
  }, [])

  const onFinish = (d: any) => {
    storeData({
      ...value,
      form: d,
    })
    setBaseValues(null)
    openGoalList()
  }

  const selectFilter = useCallback(
    (items: Array<ItemType>) => {
      const res = items.filter(({ value }) =>
        categories.find(c => c.key === value)
      )
      return res
    },
    [categories]
  )

  const customProps = {
    [FORM_KEYS.career_goals_form_category]: {
      filter: selectFilter,
    },
  }

  return (
    <FormWrapper
      value={formValue}
      onFinish={onFinish}
      baseValues={baseValues}
      editionId={editionId}
      customProps={customProps}
    />
  )
}

export default FormWrapperContainer
