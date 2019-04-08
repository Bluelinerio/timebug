// @flow
import React                          from 'react'
import { SinglePickerMaterialDialog } from 'react-native-material-dialog'

type Result = {
  value: string,
  label: string,
}

type Element = {
  key: string,
  text: string,
}

type Props = {
  elements: Array<Element>,
  dialogVisible: boolean,
  onClose: () => any,
  onSelect: Result => any,
  selectedItem: string,
}

class OptionsDialog extends React.PureComponent<Props> {
  render() {
    const {
      elements,
      dialogVisible,
      onClose,
      onSelect,
      selectedItem = null,
    } = this.props
    if (!elements || elements.length === 0 || elements.length === 1) return null
    const items = elements.map(row => ({ value: row.key, label: row.text }))
    const item = items.find(e => e.value === selectedItem)
    return (
      items && (
        <SinglePickerMaterialDialog
          title={'When do you expect to complete this step?'}
          items={items}
          scrolled={true}
          visible={dialogVisible}
          selectedItem={item ? item : items[0]}
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
