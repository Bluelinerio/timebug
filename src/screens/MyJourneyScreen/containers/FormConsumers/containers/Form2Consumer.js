import React from 'react'
import FormComponent    from '../components/Form2Component'
import GenericFormConsumer  from '../../../../../containers/GenericFormConsumer'

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
    const regex = /\d+/
    const isOne = hours.toLowerCase().includes('one')
    try { return isOne ? 1 : parseInt(hours.match(regex)) }
    catch (e) { return null }
}

const handler = ({ formData }) => {
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

const Form2Consumer = (props) => {
    const { step } = props
    const FormConsumer = GenericFormConsumer(FormComponent)
    return (
        <FormConsumer step={step} handler={handler} {...props} />
    )
}


export default Form2Consumer