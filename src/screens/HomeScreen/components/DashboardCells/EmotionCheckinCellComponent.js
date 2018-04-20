// @flow
import * as React from 'react'
import {
  CellContainer,
  Container,
  VectorItemButton,
  Title
} from './DashboardViews.js'

const EmojiButton = <VectorItemButton name="emoji-neutral" />

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
}) => (
  <CellContainer onClose={onClose}>
    <Title title={title} />
    <Container>
      <EmojiButton {...button} />
    </Container>
  </CellContainer>
)

export default EmotionCheckinCellComponent
