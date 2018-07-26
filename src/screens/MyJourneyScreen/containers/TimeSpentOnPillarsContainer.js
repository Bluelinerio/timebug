import { compose, mapProps }       from 'recompose'
import R                           from 'ramda'
import FormConsumer                from './../../../containers/FormConsumer';
import TimeSpentOnPillarsComponent from '../components/TimeSpentOnPillarsComponent'

const STEP2 = '2'

const wantedKeys = {
    typical: {
        form: '1',
        key: 'typicalWeeklyBreakdown'
    },
    ideal: {
        form: '2',
        key: 'idealWeeklyBreakdown'
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
        const { typical, ideal } = wantedKeys
        const typicalWeek = formData[typical.form][typical.key]
        const idealWeek = formData[ideal.form][ideal.key]
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