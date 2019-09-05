import React from 'react'
import { View } from 'react-native'
import Header from '../../RootTool/containers/HeaderContainer'
import FormWrapper from '../containers/FormWrapperContainer'
import styles from '../styles'

class FormComponent extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FormWrapper />
      </View>
    )
  }
}

export default FormComponent
