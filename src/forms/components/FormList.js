import * as React                  from 'react'
import { removeLabelFromListItem } from './FormManipulations'
import { triggerAnimation }        from '../../screens/styles'
import {
  ListContainer,
  RowWithoutButtons,
  ErrorLabel,
  Label,
  HelpLabel,
  AddButton,
  ItemContainer,
  ListFootnote
}                                  from './Views'

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
    labelText?: () => void,
    color: string,
    min?: number,
    max?: number
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

  labelProps = style => {
    const { config } = this.props
    const text = config.labelText && config.labelText(this.props)
    return (
      text && {
        text,
        style
      }
    )
  }

  composeStyles = (...overrideStyles) => {
    return (...styles) => [...styles, ...overrideStyles]
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

    const { index, pages } = this.state

    const labelStyles = this.composeStyles({
      color: config.stepColor
    })(hasError ? styles.controlLabel.error : styles.controlLabel.normal)

    const labelProps = this.labelProps(labelStyles)
    const labelComponent = labelProps && Label(labelProps)

    const footnote = ListFootnote(items ? items.length : 0, config)

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

    const children = items.map(removeLabelFromListItem).map(RowWithoutButtons)

    // if (focusLastItem && children && children.length > 0) {
    //   const lastChildIndex = children.length - 1
    //   const lastChild = children[lastChildIndex]
    // }

    return (
      <ListContainer style={styles.fieldset.normal}>
        {labelComponent}
        {footnote}
        {helpComponent}
        {errorComponent}
        {addButton}
        <ItemContainer>{children}</ItemContainer>
      </ListContainer>
    )
  }
}
