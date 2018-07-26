import { compose, mapProps }       from 'recompose'
import R                           from 'ramda'
import FormConsumer                from './../../../containers/FormConsumer';
import TimeSpentOnPillarsComponent from '../components/TimeSpentOnPillarsComponent'

const STEP2 = '2'

const wantedKeys = {
    typicalWeek: {
        form: '1',
        key: 'typicalWeeklyBreakdown'
    },
    idealWeek: {
        form: '2',
        key: 'idealWeeklyBreakdown'
    }
}

const getDataFromForm = (formData) => {
    return Object.keys(wantedKeys).reduce((obj, k) => {
        const { form, key } = wantedKeys[k]
        return {
            ...obj,
            [k]: formData[form][key]
        }
    }, {})
}

const parseHoursIntoNumber = (hours) => {
    console.log(hours)
    const regex = /\d+/
    const isOne = hours.toLowerCase().includes('one')
    try { return isOne ? 1 : parseInt(hours.match(regex)) }
    catch (e) { return null }
}

const notEmpty = compose(R.not,R.isEmpty)

const merge = ({
    modelsAndDataForExercise
}) => {
    const { formData } = modelsAndDataForExercise(STEP2)

    if(formData && notEmpty(formData)) {
        const { typicalWeek, idealWeek } = getDataFromForm(formData)
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