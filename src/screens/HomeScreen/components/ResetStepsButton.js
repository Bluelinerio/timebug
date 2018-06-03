/* @flow */

import React from 'react'
import { connect } from 'react-redux'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../../styles/dashboard.styles'
import { resetRequest } from '../../../redux/actions/formData.actions'

const ResetStepsButton = ({ reset }) => {
    return (
        <TouchableOpacity style={styles.reset} onPress={reset} >
            <Text style={styles.resetText}>DEV: Press to reset steps</Text>
        </TouchableOpacity>
    )
}

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(resetRequest())
})

export default connect(null, mapDispatchToProps)(ResetStepsButton)
