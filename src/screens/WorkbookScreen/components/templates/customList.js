import React from 'react'
import FormList from './FormList'

export default ({ stylesheet, hidden, ...rest }) =>
  !hidden && (
    <FormList
      {...{
        ...rest,
        styles: stylesheet
      }}
    />
  )
