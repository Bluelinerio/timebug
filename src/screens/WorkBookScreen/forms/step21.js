import t from "../components/templates";
import { LifeCategory,CharachterStrengths } from "./contents";

export default {
    1:{ 
        title:'Imagine different areas of your garden, as in the Life Categories which you have created back on Day 2. Who planted most of the seeds in your garden over the course of your life?',
        type: t.struct({
           garden:t.list(
               t.struct({
                   areaOfGarden:LifeCategory,
                   selfInfluence:t.Number,
                   otherInfluence:t.maybe(t.Number)
               })
           )
        }),
        options:{
            fields:{
                garden:{
                    item:{
                        fields:{
                            selfInfluence: {
                                placeholder:'Self Influence(%)',
                                auto:'none'
                            },
                            otherInfluence: {
                                placeholder:'Other Influence(%)',
                                auto:'none'
                            }
                        }
                    }
                }
            }
        }
    },
    2:{
        title:'Are you committed to taking full ownership of your life garden going forward?',
        type: t.struct({
            yes:t.Boolean,
            no:t.Boolean
        }) 
     },
     3:{
         title:'Reflecting on the 7 Self-Assessments from days 13-19, list two BHAGs for 2020',
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
             spiritualityBHAG:t.maybe(t.String)
         }),
         options: {
             fields:{
                 careerShortcoming:{
                     label:'Career \n\nA failure or shortcoming that you experienced over the last 5 years',
                     auto:'none'
                 },
                 careerBHAG:{
                     label:'Something completely new',
                     auto:'none'
                 },
                 personalityAndHobbiesShortcoming:{
                    label:'Personality And Hobbies \n\nA failure or shortcoming that you experienced over the last 5 years',
                    auto:'none'
                },
                personalityAndHobbiesBHAG:{
                    label:'Something completely new',
                    auto:'none'
                },
                healthShortcoming:{
                    label:'Health \n\nA failure or shortcoming that you experienced over the last 5 years',
                    auto:'none'
                },
                healthBHAG:{
                    label:'Something completely new',
                    auto:'none'
                },
                relationshipShortcoming:{
                    label:'Relationships \n\nA failure or shortcoming that you experienced over the last 5 years',
                    auto:'none'
                },
                relationshipBHAG:{
                    label:'Something completely new',
                    auto:'none'
                },
                financialShortcoming:{
                    label:'Financial \n\nA failure or shortcoming that you experienced over the last 5 years',
                    auto:'none'
                },
                financialBHAG:{
                    label:'Something completely new',
                    auto:'none'
                },
                PEShortcoming:{
                    label:'Place And Environment \n\nA failure or shortcoming that you experienced over the last 5 years',
                    auto:'none'
                },
                PEBHAG:{
                    label:'Something completely new',
                    auto:'none'
                },
                spiritualityShortcoming:{
                    label:'Spirituality \n\nA failure or shortcoming that you experienced over the last 5 years',
                    auto:'none'
                },
                spiritualityBHAG:{
                    label:'Something completely new',
                    auto:'none'
                }
             }
         }
     },
     4:{
         title:'Think about how strong your current tools(skills,approach,etc) are for tending to your garden - Strengths & Weaknesses from Day 3 is a useful review.',
         type: t.struct({
             skills:t.list(
                 t.struct({
                    skill:CharachterStrengths,
                    proficiencyLevel:t.Number,
                    aspirationLevel:t.Number,
                    improvements:t.maybe(t.String)
                 })
            )
         }),
         options:{
             fields:{
                 skills:{
                     item:{
                         fields:{
                             skill:{
                                 label:'Skill',
                                 auto:'none'
                             },
                             proficiencyLevel:{
                                 label:'Proficiency Level(Using a 10pt Scale with 1=beginner to 10=master)',
                                 auto:'none'
                             },
                             aspirationLevel:{
                                 label:'Aspiration level in 2020',
                                 auto:'none'
                             },
                             improvements:{
                                 label:'What improvements needs to happen for you to reach your aspirational 2020 leve?',
                                 auto:'none'
                             }
                         }
                     }
                 }
             }
         }
     }
}