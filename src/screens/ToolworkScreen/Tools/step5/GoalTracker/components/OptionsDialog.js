// @flow
import React                          from 'react'
import { SinglePickerMaterialDialog } from 'react-native-material-dialog'

type Result = {
  value: string,
  label: string,
}

type Content = {
  key: string,
  text: string,
}

type Props = {
  elements: Array<Content>,
  dialogVisible: boolean,
  onClose: () => any,
  onSelect: Result => any,
  text?: string,
  value?: string,
}

class OptionsDialog extends React.PureComponent<Props> {
  render() {
    const {
      elements,
      dialogVisible,
      onClose,
      onSelect,
      text = null,
      value = null,
    } = this.props
    if (!elements || elements.length === 0 || elements.length === 1) return null
    const items = elements.map(row => ({ value: row.key, label: row.text }))
    const selectedItem = value
      ? items.find(item => item.value === value) || items[0]
      : items[0]
    return (
      items && (
        <SinglePickerMaterialDialog
          title={text ? text : 'When do you expect to complete this step?'}
          items={items}
          scrolled={true}
          visible={dialogVisible}
          selectedItem={selectedItem}
          onCancel={onClose}
          onOk={result => {
            onSelect(result.selectedItem)
          }}
        />
      )
    )
  }
}

export default OptionsDialog
