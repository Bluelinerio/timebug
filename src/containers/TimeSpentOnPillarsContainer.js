import { compose, mapProps } from 'recompose'
import R from 'ramda'
import selectors from '../redux/selectors';
import FormConsumer from './FormConsumer';
import TimeSpentOnPillarsComponent from '../components/TimeSpentOnPillarsComponent'

const STEP2 = '2'

const wantedKeys = {
    ['1']: {
        typicalWeeklyBreakdown: [
            'pillarOfLife',
            'hours'
        ],
    },
    ['2']: {
        idealWeeklyBreakdown: [
            'pillarOfLife',
            'hours'
        ]
    }
}

const merge = ({
    modelsAndDataForExercise
}) => {
    const { formData } = modelsAndDataForExercise(STEP2)
    const notEmpty =compose(R.not,R.isEmpty)
    const parseHoursIntoNumber = (hours) => {
        const regex = /\d+/
        try {
            return parseInt(hours.match(regex))
        }
        catch (e) {
            return null
        }
    }
    if(formData && notEmpty(formData)){
        const typicalWeek = formData['1']['typicalWeeklyBreakdown']
        const idealWeek = formData['2']['idealWeeklyBreakdown']
        const typicalWeekTemplateObject = typicalWeek.reduce(( allPillars, pillar) => {
            const { pillarOfLife, hours } = pillar
            return {
                ...allPillars,
                [pillarOfLife]: {
                    typicalWeek: parseHoursIntoNumber(hours)
                }
            }
        }, {})

        const steptemplateObject = idealWeek.reduce(( allPillars, pillar) => {
            const { pillarOfLife, hours } = pillar            
            const counterPart = typicalWeekTemplateObject[pillarOfLife] ? typicalWeekTemplateObject[pillarOfLife] : {}
            return {
                ...allPillars,
                [pillarOfLife] : {
                    ...counterPart,
                    idealWeek: parseHoursIntoNumber(hours)
                }  
            }
        }, typicalWeekTemplateObject)

        return {
            pillars: steptemplateObject
        }
    }
    return {}
}

const TimeSpentOnPillarsContainer = compose(
    FormConsumer,
    mapProps(merge),
)(TimeSpentOnPillarsComponent)

export default TimeSpentOnPillarsContainer