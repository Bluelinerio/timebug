// @flow
import * as React from 'react'
import {
  CellContainer,
  Container,
  VectorEntypoButton,
  Title
} from './DashboardViews.js'

const EmotionCheckinCellComponent = ({
  button,
  title,
  onClose
}: {
  button: {
    onPress: () => void,
    title: string
  },
  title: string,
  onClose: () => void
}) => {
  return (
    <CellContainer onClose={onClose}>
      <Title title={title} />
      <Container>
        <VectorEntypoButton name="emoji-neutral" {...button} />
      </Container>
    </CellContainer>
  )
}
export default EmotionCheckinCellComponent
