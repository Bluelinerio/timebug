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
  Alert
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

type Layout = {
  height: number,
  width: number,
  x: number,
  y: number
}

type State = {
  isInvalid: boolean,
  value: any,
  model: {
    type: any,
    options: any
  },
  formLayout: ?Layout,
  containerLayout: ?Layout,
  bufferViewHeight : number,
  layoutReady: boolean
};

class WorkbookScreenContainer extends Component<Props, State> {

  form:?Form = null

  constructor(props: Props) {
    super(props);
    const { value, model } = props
    this.state = {
      isInvalid: true,
      model,
      value,
      bufferViewHeight : 0,
      layoutReady: false
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

  // this is an implmentation of ajustment of a growing/shrinking view makin sure the the minimal height of the scroll view content is at least the height of the scroll view itself. (its container)
  layout = () => {
    const { containerLayout, formLayout, bufferViewHeight } = this.state
    if( containerLayout && formLayout ) {
      const newHeight = containerLayout.height - formLayout.height;
      if (!bufferViewHeight) {
        this.setState({
          layoutReady: true,
          bufferViewHeight: newHeight
        })
      } else if (newHeight !== 0) {
        this.setState({
          layoutReady: true,
          bufferViewHeight: Math.max(0, bufferViewHeight + newHeight)
        })
      } else {
        this.setState({
          layoutReady: true,
        })
      }
    } else {
      this.setState({
        layoutReady: false
      })
    }
  }

  onLayout = ({ nativeEvent: { layout }}) => {
    const { formLayout } = this.state
    this.setState({
      containerLayout: layout,
    }, this.layout)
  } 
  onFormLayout = ({ nativeEvent:{ layout }}) => {
    this.setState({
      formLayout:layout,
    }, this.layout)
  }

  render = () => {
    const { stepColor, isFetching, buttonMessage, backgroundImage } = this.props;
    const { model: { options, type }, isInvalid, value, layoutReady, bufferViewHeight } = this.state;
    if(isFetching) {
      return <DefaultIndicator size='large' />
    }
  
    return (
      <View 
        onLayout={this.onLayout}
        style={{ flex: 1 }} 
      >
        <ScrollView 
          style={styles.fullScreenScrollView}
        >
          <View
            onLayout={this.onFormLayout}
            style={{
              opacity: layoutReady ? 1 : 0
            }}
          >
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
            <View style={[styles.flexibleHeightView, 
              bufferViewHeight 
                ? { height: bufferViewHeight}
                : {}
            ]}/>
            <Image 
              resizeMode='cover'
              style={[styles.image, {
                tintColor: stepColor,
              }]} 
                source={backgroundImage}
            />
          </View>
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
