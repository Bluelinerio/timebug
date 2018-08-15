import {
    PHASE_1_COMPLETED_KEY,
    PHASE_2_COMPLETED_KEY,
    PHASE_3_COMPLETED_KEY,
    PHASE_1_NOT_COMPLETED_KEY,
    PHASE_2_NOT_COMPLETED_KEY,
    PHASE_3_NOT_COMPLETED_KEY
} from '../../../services/dummyCms'
import { phaseForStepAtIndex, MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '../../../services/cms'

const mapPhaseAndCompletionToKey = (phase, completed) => {
    switch(phase){
        case MEDITATION:
            return completed ? PHASE_1_COMPLETED_KEY : PHASE_1_NOT_COMPLETED_KEY
        case SELF_ASSESSMENT:
            return completed ? PHASE_2_COMPLETED_KEY : PHASE_2_NOT_COMPLETED_KEY
        case VISION_CREATION:
            return completed ? PHASE_3_COMPLETED_KEY : PHASE_3_NOT_COMPLETED_KEY
            
    }
}

export const getColorForStepAtIndex = (stepIndex, state) => {
    const phase = phaseForStepAtIndex(stepIndex)
    const { user } = state
    const { forms } = user
    return mapPhaseAndCompletionToKey(phase, forms.find(form => form.stepId === stepIndex + 1) ? true : false)
}