// @flow
import React                                        from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import AdvisorTile                                  from './AdvisorTile'
import styles                                       from '../../styles/board'

type Advisor = {
  name: string,
  category: string,
  id: string,
}

type Props = {
  step: any,
  tool: any,
  data: Array<Advisor>,
  storeAwardData: (value: any, tool: any) => any,
  goToForm: () => any,
  goToAdvisor: any => any,
  goToSync: any => any,
}

class BoardScreen extends React.PureComponent<Props> {
  _goToForm = () => {
    const { goToForm } = this.props
    goToForm()
  }

  render() {
    const { data, goToAdvisor, goToSync } = this.props
    return (
      <ScrollView
        style={[styles.scrollView, styles.fullWidth]}
        contentContainerStyle={styles.scrollView}
      >
        <View style={[styles.container, styles.padded]}>
          <View style={styles.advisorList}>
            {data &&
              data.map(advisor => {
                const { id } = advisor
                return (
                  <AdvisorTile
                    key={id}
                    goToAdvisor={goToAdvisor}
                    goToSync={goToSync}
                    advisor={advisor}
                  />
                )
              })}
          </View>
          <View style={styles.stepButtonContainer}>
            <TouchableOpacity
              style={styles.stepButton}
              onPress={this._goToForm}
            >
              <Text style={styles.stepButtonText}>Change your advisors</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default BoardScreen
