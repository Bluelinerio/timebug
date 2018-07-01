import * as React from 'react'
import { removeLabelFromListItem } from './FormManipulations'
import { triggerAnimation } from '../../../styles'

import {
  ListContainer,
  RowWithoutButtons,
  ErrorLabel,
  Label,
  HelpLabel,
  AddButton,
  ItemContainer
} from './Views'

type Item = {
  key: string,
  input: React.Node,
  button: Array<{
    click: () => void,
    label: string,
    type: string
  }>
}

type Props = {
  styles: {},
  items: Array<Item>,
  hasError: boolean,
  error: any,
  add: {
    type: string,
    click: () => void
  },
  label: string,
  help: string,
  maxLines: string,
  config: {
    labelText?: () => void
  }
}

type State = {
  index: number,
  pages: number,
  focusLastItem: boolean
}

export default class FormList extends React.Component<Props, State> {
  //formPages:?FormPages = null

  state = {
    index: -1,
    pages: 0,
    focusLastItem: false
  }

  componentWillReceiveProps = nextProps => {
    if (this.state.pages !== nextProps.items.length) {
      this.setState(
        {
          pages: nextProps.items.length
        },
        triggerAnimation
      )
    }
  }

  labelProps = () => {
    const { styles, hasError, config } = this.props
    const text = config.labelText && config.labelText(this.props)
    return (
      text && {
        text,
        style: [
            hasError 
              ? styles.controlLabel.error 
              : styles.controlLabel.normal,
            {
              color: config.stepColor
            }
          ]
      }
    )
  }

  render() {
    const {
      items,
      styles,
      hasError,
      error,
      add,
      label,
      help,
      maxLines,
      config
    } = this.props

    const { index, pages, focusLastItem } = this.state

    const labelProps = this.labelProps()
    const labelComponent = labelProps && Label(labelProps)

    const helpComponent = help
      ? HelpLabel({
          style: hasError ? styles.helpBlock.error : styles.helpBlock.normal,
          text: label
        })
      : null

    const errorComponent =
      hasError && error
        ? ErrorLabel({
            style: styles.errorBlock,
            text: error
          })
        : null

    const addButtonEnabled =
      items.length === 0 || items[items.length - 1].input.props.value

    const shouldRenderAddButton =
      pages < (maxLines || 10) && (add && add.type && add.click)

    const addButton = shouldRenderAddButton
      ? AddButton({
          key: add.type,
          text: '', //items === 0 ? 'Create First' : `Create another (${items.length})`,
          disabled: !addButtonEnabled,
          onPress: () => {
            add.click()
            this.setState({
              index: index + 1,
              focusLastItem: true
            })
          },
          style: {
            backgroundColor: config.color
          }
        })
      : null

    const children = items
      .reverse()
      .map(removeLabelFromListItem)
      .map(RowWithoutButtons)

    const lastChildIndex = children.length - 1

    if (focusLastItem && lastChildIndex >= 0) {
      const lastChild = children[lastChildIndex]
      // lastChild.focus
    }
    return (
      <ListContainer style={styles.fieldset.normal}>
        {labelComponent}
        {helpComponent}
        {errorComponent}
        {addButton}
        <ItemContainer>{children}</ItemContainer>
      </ListContainer>
    )
  }
}
