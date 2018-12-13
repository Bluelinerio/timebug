import React from 'react';
import Label from './Label';
import TextInput from './TextInput';
import Button from './ButtonComponent';
import types from '../../forms/types';
import Select from './SelectComponent';
import List from './ListComponent';
import MultipleSelect from './MultipleSelectComponent';

type Props = {
  onChange: () => any,
  value: any,
  field: any,
};

const selectComponent = ({ type }: { type: string }) => {
  switch (type) {
  case types.label:
    return Label;
  case types.string:
    return TextInput;
  case types.button:
    return Button;
  case types.select:
    return Select;
  case types.list:
    return List;
  case types.multipleSelect:
    return MultipleSelect;
  }
};

class FormPicker extends React.PureComponent<Props> {
  render() {
    const { field } = this.props;
    const Component = selectComponent(field);
    return <Component {...this.props} />;
  }
}

export default FormPicker;