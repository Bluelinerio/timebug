import React                                                from 'react';
import { 
  View, 
  Text, 
  TouchableHighlight, 
  TouchableOpacity, 
  Keyboard,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styles/templates'

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

const renderLabel = ({style, text}) => (<Text style={style}>{text}</Text>)

const renderHelpLabel = ({style, text}) => (<Text style={style}>{text}</Text>)

const renderRowAddButton = ({key, text, onPress}) => (
  <TouchableOpacity
    key={key}
    style={styles.listAddButton}
    onPress={onPress}
  >
    <Icon
      name="add"
      size={32}
      color="black"
    />
    <Text style={{

    }}
    >
      {text}
    </Text>
  </TouchableOpacity>
)

const Container = ({ items }) => (
  <View>
    {items.map(renderRowWithoutButtons)}
  </View>
)


export default class FormList extends React.Component {

  //formPages:?FormPages = null

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
      help,
      maxLines, // config
      config
    } = this.props;

    const { index, pages } = this.state;

    const labelComponent = label 
      ? renderLabel({
        style:hasError 
          ? styles.controlLabel.error 
          : styles.controlLabel.normal, 
        text:label
      })
      : null;
    const helpComponent = help
      ? renderHelpLabel({
        style:hasError 
          ? styles.helpBlock.error 
          : styles.helpBlock.normal, 
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
        ? renderRowAddButton({ 
            key:add.type, 
            text: pages === 0 ? 'Create First' : `(${items.length})`,
            onPress:() => {
              add.click()
              this.setState({
                index:index + 1
              })
            }
          }) 
        : null;

    return (
      <View style={[styles.fieldset.normal, { 
        flex:1,
      }]}>
        {labelComponent}
        {helpComponent}
        {errorComponent}
        {addButton}
        <Container items={items} /> 
      </View>
    );
    
  }  
}
