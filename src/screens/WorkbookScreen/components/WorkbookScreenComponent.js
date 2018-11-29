// @flow
import React, { Component } from 'react';
import {
  View,
  Platform,
  ScrollView,
  Image,
  Alert,
  StatusBar,
} from 'react-native';
import t from '../../../forms/components';
import KeyboardComponent from '../../../components/KeyboardComponent';
import DefaultIndicator from '../../../components/DefaultIndicator';
import WorkbookNextButton from '../components/WorkbookNextButton';
import styles from '../styles';
import hexToRgba from '../../../utils/colorTransform';

const Form = t.form.Form;

export type Model = {
  type: any,
  options: any,
};

export type Props = {
  value: any,
  model: Model,
  next: (value: any) => void,
  buttonMessage: string,
  stepColor: string,
  isFetching: boolean,
  backgroundImage: string,
};

type Layout = {
  height: number,
  width: number,
  x: number,
  y: number,
};

type State = {
  isInvalid: boolean,
  value: any,
  model: {
    type: any,
    options: any,
  },
  formLayout: ?Layout,
  containerLayout: ?Layout,
  bufferViewHeight: number,
  layoutReady: boolean,
  errors: ?any,
};

class WorkbookScreenComponent extends Component<Props, State> {
  form: ?Form = null;

  constructor(props: Props) {
    super(props);
    const { value, model } = props;
    this.state = {
      isInvalid: true,
      model,
      value,
      bufferViewHeight: 0,
      layoutReady: false,
      errors: null,
    };
  }

  componentDidMount() {
    const { model: { focusField, type }, value } = this.state;

    if (focusField) {
      this.form.getComponent(focusField).refs.input.focus();
    }
    const isInvalid = t.validate(value, type).isValid() === false;
    if (isInvalid !== this.state.isInvalid) {
      this.setState({
        isInvalid,
      });
    }
  }

  showAlert = () => {
    const { errors } = this.state;
    if (errors && errors.length) {
      Alert.alert(errors[0].message, '', [
        /* this is for later ideally working with react-native-keyboard-aware-scroll-view
            {
              text: 'Show me',
              onPress: () => {
                const component = this.form.getComponent(path)
                const ref = component.refs.input
                input.focus()
              },
            },
            */
        {
          text: 'OK',
        },
      ]);
    }
  };

  onPress = () => {
    const { errors, value } = this.form.validate();
    if (errors && errors.length > 0) {
      this.setState(
        {
          errors,
        },
        this.showAlert
      );
    } else {
      const { next } = this.props;
      next(value);
    }
  };

  /* eslint-disable-next-line */
  onChange = (value: any, path: [string]) => {
    const { model: { type } } = this.state;
    // const fieldName = path[path.length - 1]
    // const fieldValue = path.reduce((struct: {}, field) => struct[field], value)
    if (!this.state.errors) {
      const isInvalid = t.validate(value, type).isValid() === false;
      if (this.state.isInvalid !== isInvalid || this.state.value !== value) {
        this.setState({
          isInvalid,
          value,
        });
      }
    } else {
      const { errors } = this.form.validate();
      const isInvalid = errors.length;
      this.setState({
        isInvalid,
        value,
        errors,
      });
    }
  };

  handleFormRef = ref => {
    this.form = ref;
  };

  // this is an implmentation of ajustment of a growing/shrinking view makin sure the the minimal height of the scroll view content is at least the height of the scroll view itself. (its container)
  layout = () => {
    const {
      containerLayout,
      formLayout,
      bufferViewHeight,
      layoutReady,
    } = this.state;
    if (containerLayout && formLayout) {
      const newBufferHeight = Math.max(
        0,
        bufferViewHeight +
          Math.max(0, containerLayout.height - formLayout.height)
      );
      if (newBufferHeight !== bufferViewHeight) {
        this.setState({
          layoutReady: true,
          bufferViewHeight: newBufferHeight,
        });
      } else if (!layoutReady) {
        this.setState({
          layoutReady: true,
        });
      }
    }
  };

  onLayout = ({ nativeEvent: { layout } }) => {
    this.setState(
      {
        containerLayout: layout,
      },
      this.layout
    );
  };
  onFormLayout = ({ nativeEvent: { layout } }) => {
    this.setState(
      {
        formLayout: layout,
      },
      this.layout
    );
  };

  render = () => {
    const {
      stepColor,
      isFetching,
      buttonMessage,
      backgroundImage,
    } = this.props;
    const {
      model: { options, type },
      isInvalid,
      value,
      layoutReady,
      bufferViewHeight,
    } = this.state;
    if (isFetching) {
      return <DefaultIndicator size="large" />;
    }

    const { config } = options;
    return (
      <View onLayout={this.onLayout} style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={stepColor} />
        <ScrollView style={styles.fullScreenScrollView}>
          <View
            onLayout={this.onFormLayout}
            style={{
              opacity: layoutReady ? 1 : 0,
            }}
          >
            <Form
              type={type}
              ref={this.handleFormRef}
              options={{
                ...{
                  ...options,
                  config: {
                    ...config,
                    stepColor,
                    color: hexToRgba(stepColor, 0.1),
                  },
                },
                topLevel: true,
              }}
              value={value}
              onChange={this.onChange}
            />
            <View
              style={[
                styles.flexibleHeightView,
                bufferViewHeight ? { height: bufferViewHeight } : {},
              ]}
            />
            <Image
              resizeMode="cover"
              style={[
                styles.image,
                {
                  tintColor: stepColor,
                },
              ]}
              source={backgroundImage}
            />
          </View>
        </ScrollView>
        <KeyboardComponent
          enabled={Platform.OS === 'android'}
          shouldRender={({ showing, enabled }) => !enabled || !showing}
        >
          <View style={styles.workbookNextButtonContainer}>
            <WorkbookNextButton
              isInvalid={isInvalid}
              onPress={this.onPress}
              buttonMessage={buttonMessage}
              backgroundColor={stepColor}
            />
          </View>
        </KeyboardComponent>
      </View>
    );
  };
}

export default WorkbookScreenComponent;
