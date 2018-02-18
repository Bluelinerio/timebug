// @flow
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  ScrollView,
  Keyboard,
  Image,
  Dimensions,
  Alert // for future user in case we want users to get error as alert.
} from "react-native";
import t                    from './templates';
import WorkbookNextButton   from '../components/WorkbookNextButton'
import type {
  NextButtonProps
}                           from '../components/WorkbookNextButton'
import DefaultIndicator     from '../../../components/DefaultIndicator';
import styles               from '../styles';
const Form = t.form.Form;

export type Model = {
  type: any,
  options: any
}

export type Props = {
  value: any,
  model: Model,
  next: () => void,
  buttonMessage:string,
  stepColor: string, 
  submit: (value: any) => void,
  isFetching: boolean
};

type State = {
  isInvalid: boolean,
  value: any,
  model: {
    type: any,
    options: any
  }
};

class WorkbookScreenContainer extends Component<Props, State> {

  form:?Form = null

  constructor(props: Props) {
    super(props);
    const { value, model } = props
    this.state = {
      isInvalid: true,
      model,
      value
    }
  }

  componentDidMount() {
    Keyboard.dismiss(); // police keyboard is always off, when starting (specially with android.)
    const { model: { focusField, type } , value } = this.state

    if (focusField) {
      this.form.getComponent(focusField).refs.input.focus();
    }
    const isInvalid = t.validate(value, type).isValid() === false
    if(isInvalid !== this.state.isInvalid) {
      this.setState(state => ({
        isInvalid,
      }))
    }
  }

  onPress = () => {
    const { errors, value } = this.form.validate()
    if( errors.length > 0 ) {
      const { message, path } = errors[0]
      Alert.alert(
        message, 
        '', 
        [ 
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
          } ]
      )
    } else {
      const { next , submit } = this.props; 
      submit(value);
      next()
    }
  }
  
  
  onChange = (value: any, path: [string]) => {
    const { model : { type }} = this.state;
    const fieldName = path[path.length - 1];
    const fieldValue = path.reduce((struct: {}, field) => struct[field], value)
    const isInvalid = t.validate(value, type).isValid() === false;
    if(this.state.isInvalid !== isInvalid || this.state.value !== value) {
      this.setState({
        isInvalid,
        value
      });
    }
  }
  
  handleFormRef = (ref) => {
    this.form = ref;
  }
  
  render = () => {
    const { stepColor, isFetching, buttonMessage, backgroundImage } = this.props;
    const { model: { options, type }, isInvalid, value } = this.state;
    if(isFetching) {
      return <DefaultIndicator size='large' />
    }

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <Form
              type={type}
              ref={this.handleFormRef}
              options={{
                ...options,
                topLevel:true
              }}
              value={value}
              onChange={this.onChange}
            />
          <Image 
            resizeMode='cover'
            style={[styles.image, {
              tintColor:stepColor,
            }]} 
              source={backgroundImage}
          />
        </ScrollView>
        <View
          style={styles.workbookNextButtonContainer}
        >
          <WorkbookNextButton
            isInvalid={isInvalid}
            onPress={this.onPress}
            buttonMessage={buttonMessage}
            backgroundColor={stepColor}
          />
        </View>
      </View>
    );
  }
}

export default WorkbookScreenContainer;
