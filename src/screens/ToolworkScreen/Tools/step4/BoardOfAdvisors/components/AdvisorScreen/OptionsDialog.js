import React                          from 'react'
import { SinglePickerMaterialDialog } from 'react-native-material-dialog'

type Result = {
  value: string,
  label: string,
}

type Props = {
  elements: Array<string>,
  dialogVisible: boolean,
  onClose: () => any,
  onSelect: Result => any,
}

class OptionsDialog extends React.PureComponent<Props> {
  render() {
    const { elements, dialogVisible, onClose, onSelect } = this.props
    if (!elements || elements.length === 0 || elements.length === 1) return null
    const items = elements.map(row => ({ value: row, label: row }))
    return (
      items && (
        <SinglePickerMaterialDialog
          title={'Select one of the following'}
          items={items}
          visible={dialogVisible}
          selectedItem={items[0]}
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
