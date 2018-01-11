import t from "../components/templates";
import { LifeCategory,CharachterStrengths } from "./contents";

export default {
    1:{ 
        type: t.struct({
            id:t.maybe(t.String),
           garden:t.list(
               t.struct({
                   areaOfGarden:LifeCategory,
                   selfInfluence:t.Number,
                   otherInfluence:t.maybe(t.Number),
                   nameOfOther:t.String
               })
           )
        }),
        options:{
            label:'Imagine different areas of your garden, as in the Life Categories which you have created back on Day 2. Who planted most of the seeds in your garden over the course of your life?',
            fields:{
                id:{
                    hidden: true
                },
                garden:{
                    item:{
                        fields:{
                            areaOfGarden: {
                                error:'Please select a value.'
                            },
                            selfInfluence: {
                                placeholder:'Self Influence(%)',
                                error: 'Please fill out this field.'
                            },
                            otherInfluence: {
                                placeholder:'Other Influence(%)',
                                auto:'none'
                            },
                            nameOfOther: {
                                error: 'Please fill out this field.'
                            }
                        }
                    }
                }
            }
        },
        value : {
          fields: {
            id: 'step21+v0.0.0.2'
          }
        }

    },
    2:{
        type: t.Boolean,
        options: {
            label:'Are you committed to taking full ownership of your life garden going forward?',
        }
     },
     3:{
         type:t.struct({
             careerShortcoming:t.String,
             careerBHAG:t.String,
             personalityAndHobbiesShortcoming:t.String,
             personalityAndHobbiesBHAG:t.String,
             healthShortcoming:t.String,
             healthBHAG:t.String,
             relationshipShortcoming:t.String,
             relationshipBHAG:t.String,
             financialShortcoming:t.String,
             financialBHAG:t.String,
             PEShortcoming:t.String,
             PEBHAG:t.String,
             spiritualityShortcoming:t.String,
             spiritualityBHAG:t.String
         }),
         options: {
             label:'Reflecting on the 7 Self-Assessments from days 13-19, list two BHAGs for 2020',
             fields:{
                 careerShortcoming:{
                     label:'Career: A failure or shortcoming that you experienced over the last 5 years',
                     auto:'none',
                     error: 'Please fill out this field.'
                 },
                 careerBHAG:{
                     label:'Career: Something completely new',
                     auto:'none',
                     error: 'Please fill out this field.'
                 },
                 personalityAndHobbiesShortcoming:{
                    label:'Personality And Hobbies: A failure or shortcoming that you experienced over the last 5 years',
                    auto:'none',
                    error: 'Please fill out this field.'
                },
                personalityAndHobbiesBHAG:{
                    label:'Personality And Hobbies: Something completely new',
                    auto:'none',
                    error: 'Please fill out this field.'
                },
                healthShortcoming:{
                    label:'Health: A failure or shortcoming that you experienced over the last 5 years',
                    auto:'none',
                    error: 'Please fill out this field.'
                },
                healthBHAG:{
                    label:'Health: Something completely new',
                    auto:'none',
                    error: 'Please fill out this field.'
                },
                relationshipShortcoming:{
                    label:'Relationships: A failure or shortcoming that you experienced over the last 5 years',
                    auto:'none',
                    error: 'Please fill out this field.'
                },
                relationshipBHAG:{
                    label:'Relationships: Something completely new',
                    auto:'none',
                    error: 'Please fill out this field.'
                },
                financialShortcoming:{
                    label:'Financial: A failure or shortcoming that you experienced over the last 5 years',
                    auto:'none',
                    error: 'Please fill out this field.'
                },
                financialBHAG:{
                    label:'Financial: Something completely new',
                    auto:'none',
                    error: 'Please fill out this field.'
                },
                PEShortcoming:{
                    label:'Place And Environment: A failure or shortcoming that you experienced over the last 5 years',
                    auto:'none',
                    error: 'Please fill out this field.'
                },
                PEBHAG:{
                    label:'Place And Environment: Something completely new',
                    auto:'none',
                    error: 'Please fill out this field.'
                },
                spiritualityShortcoming:{
                    label:'Spirituality: A failure or shortcoming that you experienced over the last 5 years',
                    auto:'none',
                    error: 'Please fill out this field.'
                },
                spiritualityBHAG:{
                    label:'Spirituality: Something completely new',
                    auto:'none',
                    error: 'Please fill out this field.'
                }
             }
         }
     },
     4:{
         type: t.struct({
             skills:t.list(
                 t.struct({
                    skill:CharachterStrengths,
                    proficiencyLevel:t.Number,
                    aspirationLevel:t.Number,
                    improvements:t.String
                 })
            )
         }),
         options:{
             label:'Think about how strong your current tools(skills,approach,etc) are for tending to your garden - Strengths & Weaknesses from Day 3 is a useful review.',
             fields:{
                 skills:{
                     item:{
                         fields:{
                             skill:{
                                 label:'Skill',
                                 auto:'none',
                                 error: 'Please select a value.'
                             },
                             proficiencyLevel:{
                                 label:'Proficiency Level(Using a 10pt Scale with 1=beginner to 10=master)',
                                 auto:'none',
                                 error: 'Please fill out this field.'
                             },
                             aspirationLevel:{
                                 label:'Aspiration level in 2020',
                                 auto:'none',
                                 error: 'Please fill out this field.'
                             },
                             improvements:{
                                 label:'What improvements needs to happen for you to reach your aspirational 2020 level?',
                                 auto:'none',
                                 error: 'Please fill out this field.'
                             }
                         }
                     }
                 }
             }
         }
     }
}