// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FormInput }                    from 'react-native-elements'
import styles                           from '../../styles/advisor'
import moment                           from 'moment'
import AdvisorLog                       from '../../containers/AdvisorScreen/AdvisorLogContainer'
import { DATE_FORMAT }                  from '2020_constants/constants'
import uuid                             from 'uuid/v4'

type Props = {
  advisor: {
    id: string,
  },
  storeAwardData: (value: any, tool: any) => any,
  addContactForAdvisor: any => any,
  tool: any,
  data: {
    value: Array<any>,
  },
}

type State = {
  text: string,
}

class LogArea extends React.PureComponent<Props, State> {
  state = { text: '' }

  _onTextChange = (text: string) => {
    this.setState({ text })
  }

  _storeReflection = () => {
    const { text } = this.state
    const { data, advisor, tool, storeAwardData } = this.props
    if (!text || text === '') return
    this.setState({ text: '' }, () => {
      const date = moment().format(DATE_FORMAT)
      const reflection = {
        id: uuid(),
        date,
        text,
      }
      if (data && data.value) {
        const { value } = data
        const previousAdvisor = value.find(adv => adv.advisorId === advisor.id)
        if (!previousAdvisor) {
          storeAwardData(
            [
              ...(value || []),
              { reflections: [reflection], advisorId: advisor.id },
            ],
            tool
          )
        } else {
          const oldReflections = previousAdvisor.reflections || []
          storeAwardData(
            [
              ...value.filter(adv => adv.advisorId !== advisor.id),
              {
                ...previousAdvisor,
                reflections: [...oldReflections, reflection],
              },
            ],
            tool
          )
        }
      } else
        storeAwardData(
          [{ reflections: [reflection], advisorId: advisor.id }],
          tool
        )
    })
  }

  render() {
    const { text } = this.state
    const { advisor, data } = this.props
    return (
      <React.Fragment>
        <View style={[styles.container, styles.logAreaContainer]}>
          <View style={[styles.container, styles.centeredContainer]}>
            <Text style={styles.textAreaheader}>
              Want to share some helpful reflections from this advisor?
            </Text>
          </View>
          <View
            style={[
              styles.container,
              styles.centeredContainer,
              styles.textAreaContainer,
            ]}
          >
            <FormInput
              containerStyle={styles.textArea}
              inputStyle={styles.additionalInput}
              underlineColorAndroid="transparent"
              multiline={true}
              value={text}
              onChangeText={this._onTextChange}
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={this._storeReflection}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <AdvisorLog advisor={advisor} data={data} />
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default LogArea
