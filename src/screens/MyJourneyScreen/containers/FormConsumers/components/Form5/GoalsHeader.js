import React from 'react'
import GenericHeader, {
  HeaderProps
}            from '../../../../components/GenericHeader'

const GoalsHeader = ({ header }: { header: HeaderProps }) => {
  return <GenericHeader {...header} />
}

export default GoalsHeader
