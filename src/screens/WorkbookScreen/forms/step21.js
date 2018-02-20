import t from "../components/templates";
import { PillarsOfLife,CharachterStrengths, PercentSelector,OneToTenScale } from "./contents";

export default {
    1:{ 
        type: t.struct({
            id:t.maybe(t.String),
           garden:t.list(
               t.struct({
                   areaOfGarden:PillarsOfLife,
                   selfInfluence:PercentSelector,
                   otherInfluence:PercentSelector,
                   nameOfOther:t.String
               })
           )
        }),
        options:{

            fields:{
                label:'Imagine different areas of your garden.',
                id:{
                    hidden: true
                },
                garden:{
                    item:{
                        fields:{
                            areaOfGarden: {
                                auto:'labels'
                            },
                            selfInfluence: {
                                label:'Self Influence(%)',
                                error: 'What percentage of the seeds in this garden were planted by you?'
                            },
                            otherInfluence: {
                                label:'Other Influence(%)',
                                error: 'What percentage of the seeds in this garden were planted by someone else?'
                            },
                            nameOfOther: {
                                error: 'Who planted most of the seeds in your garden over the course of your life? '
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
            careerBHAG1:t.String,
            careerBHAG2:t.String,
            personalityAndHobbiesBHAG:t.String,
             personalityAndHobbiesBHAG2:t.String,
             healthBHAG:t.String,
             healthBHAG2:t.String,
             relationshipBHAG:t.String,
             relationshipBHAG2:t.String,
             financialBHAG:t.String,
             financialBHAG2:t.String,
             PEBHAG:t.String,
             PEBHAG2:t.String,
             spiritualityBHAG:t.String,
             spiritualityBHAG2:t.String
         }),
         options: {
             fields:{
                label:"Reflecting on the 7 Self-assessments over Steps 13-19, list two Big Hairy Audacious Goals (BHAGs) that you'd like to plant for this next year.",
                careerBHAG:{
                     auto:'labels'
                 },
                 careerBHAG2:{
                    auto:'labels'                 },
                    personalityAndHobbiesBHAG:{
                    auto:'labels'                },
                personalityAndHobbiesBHAG2:{
                    auto:'labels'                },
                    healthBHAG:{
                    auto:'labels'                },
                healthBHAG2:{
                    auto:'labels'                },
                    relationshipBHAG:{
                    auto:'labels'                },
                relationshipBHAG2:{
                    auto:'labels'                },
                    financialBHAG:{
                    auto:'labels'                },
                financialBHAG2:{
                    auto:'labels'                },
                    placeAndEnvironmentBHAG:{
                    auto:'labels'                },
                placeAndEnvironmentBHAG2:{
                    auto:'labels'                },
                    spiritualityBHAG:{
                    auto:'labels'                },
                spiritualityBHAG2:{
                    auto:'labels'                }
             }
         }
     },
     4:{
         type: t.struct({
             skills:t.list(
                 t.struct({
                    skill:CharachterStrengths,
                    proficiencyLevel:OneToTenScale,
                    aspirationLevel:OneToTenScale,
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
                                 error: 'Please select a Charachter Strength.'
                             },
                             proficiencyLevel:{
                                 label:'Proficiency Level(Using a 10pt Scale with 1=beginner to 10=master)',
                                 error: 'Please select a value.'
                             },
                             aspirationLevel:{
                                 label:'Aspiration level in 2020',
                                 error: 'Please select a value.'
                             },
                             improvements:{
                                 label:'What improvements needs to happen for you to reach your aspirational 2020 level?',
                                 error: "Think about your past goals, things you'd like to do more and less of, etc..."
                             }
                         }
                     }
                 }
             }
         }
     }
}
