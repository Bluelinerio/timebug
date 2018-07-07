/* @flow */

import React from 'react'
import { connect } from 'react-redux'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../../styles/dashboard.styles'
import { resetRequest } from '../../../redux/actions/formData.actions'
import * as selectors from '../../../redux/selectors'
import { combineSelectors } from '../../../redux/selectors/utils'

const { isLoggedIn } = selectors.default;

const ResetStepsButton = ({ reset } : { reset: () => void }) => {
    return (
        <TouchableOpacity style={styles.reset} onPress={reset} >
            <Text style={styles.resetText}>DEV: Press to reset steps</Text>
        </TouchableOpacity>
    )
}

export default connect(
    combineSelectors({ isLoggedIn }),
    ({ reset: resetRequest })
)(ResetStepsButton)
