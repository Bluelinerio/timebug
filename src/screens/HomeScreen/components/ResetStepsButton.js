/* @flow */

import React from 'react'
import { connect } from 'react-redux'
import SimpleButton from '../../../components/SimpleButton'
import { resetRequest } from '../../../redux/actions/formData.actions'
import * as selectors from '../../../redux/selectors'
import { combineSelectors } from '../../../redux/selectors/combineSelectors'

const { hasNoCompletedForms } = selectors.default;

const ResetStepsButton = connect(
    combineSelectors({ hide: hasNoCompletedForms }),
    ({ onPress: resetRequest, text: 'DEV: Press to reset steps' })
)(SimpleButton)

export default ResetStepsButton