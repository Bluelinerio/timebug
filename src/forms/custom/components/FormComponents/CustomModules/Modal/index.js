/* eslint-disable */
import React from 'react'

import {
  View,
  Modal,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native'

import styles from './style'

let componentIndex = 0

const defaultProps = {
  data: [],
  onChange: () => {},
  onModalOpen: () => {},
  onModalClose: () => {},
  keyExtractor: item => item.key,
  labelExtractor: item => item.label,
  componentExtractor: item => item.component,
  visible: false,
  closeOnChange: true,
  initValue: 'Select me!',
  animationType: 'slide',
  style: {},
  selectStyle: {},
  selectTextStyle: {},
  optionStyle: {},
  optionTextStyle: {},
  optionContainerStyle: {},
  sectionStyle: {},
  childrenContainerStyle: {},
  touchableStyle: {},
  touchableActiveOpacity: 0.2,
  sectionTextStyle: {},
  selectedItemTextStyle: {},
  cancelContainerStyle: {},
  cancelStyle: {},
  cancelTextStyle: {},
  overlayStyle: {},
  cancelText: 'cancel',
  disabled: false,
  supportedOrientations: ['portrait', 'landscape'],
  keyboardShouldPersistTaps: 'always',
  backdropPressToClose: false,
  openButtonContainerAccessible: false,
  listItemAccessible: false,
  cancelButtonAccessible: false,
  scrollViewAccessible: false,
  scrollViewAccessibilityLabel: undefined,
  cancelButtonAccessibilityLabel: undefined,
  passThruProps: {},
  selectTextPassThruProps: {},
  optionTextPassThruProps: {},
  modalOpenerHitSlop: { top: 0, bottom: 0, left: 0, right: 0 },
  customSelector: undefined,
}

export default class ModalSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: props.visible,
      selected: props.initValue,
      cancelText: props.cancelText,
      changedItem: undefined,
    }
  }

  componentDidUpdate(prevProps) {
    let newState = {}
    let doUpdate = false
    if (prevProps.initValue !== this.props.initValue) {
      newState.selected = this.props.initValue
      doUpdate = true
    }
    if (prevProps.visible !== this.props.visible) {
      newState.modalVisible = this.props.visible
      doUpdate = true
    }
    if (doUpdate) {
      this.setState(newState)
    }
  }

  onChange = item => {
    if (Platform.OS === 'android') {
      this.props.onChange(item)
    }
    this.setState(
      { selected: this.props.labelExtractor(item), changedItem: item },
      () => {
        if (this.props.closeOnChange) this.close()
      }
    )
  }

  getSelectedItem() {
    return this.state.changedItem
  }

  close = () => {
    this.props.onModalClose()
    this.setState({
      modalVisible: false,
    })
  }

  open = () => {
    this.props.onModalOpen()
    this.setState({
      modalVisible: true,
      changedItem: undefined,
    })
  }

  renderSection = section => {
    const optionComponent = this.props.componentExtractor(section)
    let component = optionComponent || (
      <Text style={[styles.sectionTextStyle, this.props.sectionTextStyle]}>
        {this.props.labelExtractor(section)}
      </Text>
    )

    return (
      <View
        key={this.props.keyExtractor(section)}
        style={[styles.sectionStyle, this.props.sectionStyle]}
      >
        {component}
      </View>
    )
  }

  renderOption = (option, isLastItem, isFirstItem) => {
    const optionComponent = this.props.componentExtractor(option)
    const optionLabel = this.props.labelExtractor(option)
    const isSelectedItem = optionLabel === this.state.selected

    let component = optionComponent || (
      <Text
        style={[
          styles.optionTextStyle,
          this.props.optionTextStyle,
          isSelectedItem && this.props.selectedItemTextStyle,
        ]}
        {...this.props.optionTextPassThruProps}
      >
        {optionLabel}
      </Text>
    )

    return (
      <TouchableOpacity
        key={this.props.keyExtractor(option)}
        onPress={() => this.onChange(option)}
        activeOpacity={this.props.touchableActiveOpacity}
        accessible={this.props.listItemAccessible}
        accessibilityLabel={option.accessibilityLabel || undefined}
        importantForAccessibility={isFirstItem}
        {...this.props.passThruProps}
      >
        <View
          style={[
            styles.optionStyle,
            this.props.optionStyle,
            isLastItem && { borderBottomWidth: 0 },
          ]}
        >
          {component}
        </View>
      </TouchableOpacity>
    )
  }

  renderOptionList = () => {
    let options = this.props.data.map((item, index) => {
      if (item.section) {
        return this.renderSection(item)
      }
      return this.renderOption(
        item,
        index === this.props.data.length - 1,
        index === 0
      )
    })

    const closeOverlay = this.props.backdropPressToClose

    return (
      <TouchableWithoutFeedback
        key={'modalSelector' + componentIndex++}
        accessible={false}
        onPress={() => {
          closeOverlay && this.close()
        }}
      >
        <View style={[styles.overlayStyle, this.props.overlayStyle]}>
          <View
            style={[styles.optionContainer, this.props.optionContainerStyle]}
          >
            <ScrollView
              keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps}
              accessible={this.props.scrollViewAccessible}
              accessibilityLabel={this.props.scrollViewAccessibilityLabel}
            >
              <View style={{ paddingHorizontal: 10 }}>{options}</View>
            </ScrollView>
          </View>
          <View
            style={[styles.cancelContainer, this.props.cancelContainerStyle]}
          >
            <TouchableOpacity
              onPress={this.close}
              activeOpacity={this.props.touchableActiveOpacity}
              accessible={this.props.cancelButtonAccessible}
              accessibilityLabel={this.props.cancelButtonAccessibilityLabel}
            >
              <View style={[styles.cancelStyle, this.props.cancelStyle]}>
                <Text
                  style={[styles.cancelTextStyle, this.props.cancelTextStyle]}
                >
                  {this.props.cancelText}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  renderChildren = () => {
    if (this.props.children) {
      return this.props.children
    }
    return (
      <View style={[styles.selectStyle, this.props.selectStyle]}>
        <Text
          style={[styles.selectTextStyle, this.props.selectTextStyle]}
          {...this.props.selectTextPassThruProps}
        >
          {this.state.selected}
        </Text>
      </View>
    )
  }

  render() {
    const dp = (
      <Modal
        transparent={true}
        ref={element => (this.model = element)}
        supportedOrientations={this.props.supportedOrientations}
        visible={this.state.modalVisible}
        onRequestClose={this.close}
        animationType={this.props.animationType}
      >
        {this.renderOptionList()}
      </Modal>
    )

    return (
      <View style={this.props.style} {...this.props.passThruProps}>
        {dp}
        {this.props.customSelector ? (
          this.props.customSelector
        ) : (
          <TouchableOpacity
            hitSlop={this.props.modalOpenerHitSlop}
            activeOpacity={this.props.touchableActiveOpacity}
            style={this.props.touchableStyle}
            onPress={this.open}
            disabled={this.props.disabled}
            accessible={this.props.openButtonContainerAccessible}
          >
            <View
              style={this.props.childrenContainerStyle}
              pointerEvents="none"
            >
              {this.renderChildren()}
            </View>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

ModalSelector.defaultProps = defaultProps
