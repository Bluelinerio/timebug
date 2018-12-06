import React from 'react';
import MeditationCheckin, {
  key as meditationKey,
} from '../../containers/Form1/MeditationCheckinContainer';

type Props = {
  award: {
    data: any,
    model: any,
  },
  step: string,
  mapDataToPayload: () => any,
  extendedSubmit: () => any,
};

const mapComponents = (key: string, props: Props): React.Node<any> => {
  const { award: { model, data } } = props;
  switch (key) {
  case meditationKey: {
    const newProps = {
      data: data[key],
      formKey: key,
      model: model[key],
      step: props.step,
      mapDataToPayload: props.mapDataToPayload,
      extendedSubmit: props.extendedSubmit,
    };
    return <MeditationCheckin key={key} {...newProps} />;
  }
  default:
    return null;
  }
};

type FormComponentProps = {
  award: {
    data: any,
    model: any,
  },
};

class FormComponentSwitch extends React.PureComponent<FormComponentProps> {
  render() {
    const { award: { model } } = this.props;
    return (
      <React.Fragment>
        {Object.keys(model).map(key => mapComponents(key, this.props))}
      </React.Fragment>
    );
  }
}

export default FormComponentSwitch;
