import t from "../components/templates";
import { LifeCategory,CharachterStrengths, PercentSelector,OneToTenScale } from "./contents";

export default {
    1:{ 
        type: t.struct({
            id:t.maybe(t.String),
           garden:t.list(
               t.struct({
                   areaOfGarden:LifeCategory,
                   selfInfluence:PercentSelector,
                   otherInfluence:PercentSelector,
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
                                error:'Please select a Life category.'
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
                                error: 'Who planted the most?'
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
                     error: 'What is something you would like to correct?'
                 },
                 careerBHAG:{
                     label:'Career: Something completely new',
                     error: 'Reach for the stars!'
                 },
                 personalityAndHobbiesShortcoming:{
                    label:'Personality And Hobbies: A failure or shortcoming that you experienced over the last 5 years',
                    error: 'What is something you would like to correct?'
                },
                personalityAndHobbiesBHAG:{
                    label:'Personality And Hobbies: Something completely new',
                    error: 'Reach for the stars!'
                },
                healthShortcoming:{
                    label:'Health: A failure or shortcoming that you experienced over the last 5 years',
                    error: 'What is something you would like to correct?'
                },
                healthBHAG:{
                    label:'Health: Something completely new',
                    error: 'Reach for the stars!'
                },
                relationshipShortcoming:{
                    label:'Relationships: A failure or shortcoming that you experienced over the last 5 years',
                
                    error: 'What is something you would like to correct?'
                },
                relationshipBHAG:{
                    label:'Relationships: Something completely new',
                    error: 'Reach for the stars!'
                },
                financialShortcoming:{
                    label:'Financial: A failure or shortcoming that you experienced over the last 5 years',
                 
                    error: 'What is something you would like to correct?'
                },
                financialBHAG:{
                    label:'Financial: Something completely new',
                    error: 'Reach for the stars!'
                },
                PEShortcoming:{
                    label:'Place And Environment: A failure or shortcoming that you experienced over the last 5 years',
                
                    error: 'What is something you would like to correct?'
                },
                PEBHAG:{
                    label:'Place And Environment: Something completely new',
                    error: 'Reach for the stars!'
                },
                spiritualityShortcoming:{
                    label:'Spirituality: A failure or shortcoming that you experienced over the last 5 years',
                    
                    error: 'What is something you would like to correct?'
                },
                spiritualityBHAG:{
                    label:'Spirituality: Something completely new',
                    error: 'Reach for the stars!'
                }
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