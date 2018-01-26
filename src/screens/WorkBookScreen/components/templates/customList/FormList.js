import React                                                from 'react';
import { 
  View, 
  Text, 
  TouchableHighlight, 
  TouchableOpacity, 
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../../styles'
import FormPages from '../../FormPages';

const renderRowWithoutButtons = ({key, input}) => (
  <View 
    style={{ 
      flex: 1, 
      justifyContent: 'center',
      marginVertical: 10
    }} 
    key={key}
  >
    {input}
  </View>
)

const renderErrorLabel = ({style, text}) => (
  <Text accessibilityLiveRegion="polite" 
    style={style}>         
      {text}
  </Text> 
)

const renderHelpLabel = ({style, text}) => (<Text style={style}>{text}</Text>)

const renderRowButton = ({key, onPress}) => (
  <TouchableOpacity
    key={key}
    style={styles.customListAddButton}
    onPress={onPress}
  >
    <Icon
      name="add"
      size={44}
      color="black"
    />
  </TouchableOpacity>
)

export default class FormListIOS extends React.Component {

  formPages:?FormPages = null

  state = {
    index: -1,
    pages: 0
  }

  componentWillReceiveProps = (nextProps) => {
    if(this.state.pages !== nextProps.items.length) {
      this.setState({
        pages:nextProps.items.length
      })
    }
  }

  render() {
    const {
      items,
      styles,
      hasError,
      error,
      add,
      label,
      maxLines, // config
      config
    } = this.props;

    const { index, pages } = this.state;

    const labelComponent = label 
      ? renderHelpLabel({
        style:hasError 
          ? styles.controlLabel.error 
          : styles.controlLabel.normal, 
        text:label
      })
      : null;
    const errorComponent = hasError && error 
      ? renderErrorLabel({
          style: styles.errorBlock,
          text: error
        })
      : null;

    const addButton = pages < (maxLines || 10) &&
      (add && add.type && add.click)
        ? renderRowButton({ 
            key:add.type, 
            onPress:() => {
              add.click()
              this.setState({
                index:index + 1
              })
            }
          }) 
        : null;

    return (
      <View style={[styles.fieldset, { 
        flex:1,
        borderWidth:1,
        borderColor: 'green'
      }]}>
        {labelComponent}
        {errorComponent}
        {addButton}
        <FormPages
          page={index}
          horizontal={false} 
          ref={ref => this.formPages = ref }
          containerStyle={{ 
            // flex: 1,
          }} 
          indicatorPosition="none"
          onScrollEnd={(index) => Keyboard.dismiss() }
        >
          {items.map(renderRowWithoutButtons)}
        </FormPages>
      </View>
    );
    
  }  
}
