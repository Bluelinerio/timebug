import React from 'react'
import GenericHeader, {
  HeaderProps
}            from '../../../../components/GenericHeader'

const headerContent: HeaderProps = {
  elements: [
    {
      text: 'Pillar of Life'
    },
    {
      text: 'Advisor'
    },
    {
      text: 'Frequency'
    }
  ]
}
const BoardOfAdvisorsHeader = () => {
  return <GenericHeader {...headerContent} />
}

export default BoardOfAdvisorsHeader
