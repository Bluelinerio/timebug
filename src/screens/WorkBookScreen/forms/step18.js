import t from "../components/templates";
import { OneToTenScale } from "./contents";



export default {
    1: { 
        type: t.struct({
            id:t.maybe(t.String),
            field:t.String
        }),
        options:{
            fields:{
                id:{
                    hidden:true
                },
                field:{
                    label:'What changes have taken place in your PE in the last few years?',                    
                    error: 'Did you move? Downsized your home? Moved in with a new roommate? Bought more plants for the house? etc...'
                }
            }
        },
        value : {
          fields: {
            id: 'step18+v0.0.0.1'
          }
        }
    },
    2: {
        type: t.String,
        options: {
          label:'Who do you live with right now, and how does that effect your lifestyle and motivation?.',
          error: 'Please name who you live with, if anyone.'
        }
    },
    3: {
        type: t.String,
        options: {
          label:'Are you truly happy where you are or do you stay there because you are afraid of change? (or because this is all you’ve ever known)?',
          error: "Maybe you've lived in one place your entire life? Or have you moved often trying to find the right place?"
        }
    },
    4: {
        type: t.Boolean,
        options: {
            label: 'Do you authentically connect to the culture in your town or city?',
            error: 'Do you feel at home, or do you often imagine what life would be like elsewhere?'
        }
    },
    5: {
        type: t.Boolean,
         options: {
            label: 'Do you feel like you’re surrounded by like minded people or that you can get your social needs met in this environment (depending on which ones are priority) in terms of (friends, family, dating life, night life, hobbies, nature, music/art scene, affordability, etc)?'
         }
    },
    6: {
        type: t.Boolean,
         options: {
             label: 'Do the climate elements(ie. humid, dry, rainy, etc) suit you here, physically and mentally)?'
         }
    },
    7: {
        type: t.list(
            t.struct({
                goal:t.String,
                degreeMet:OneToTenScale,
                why:t.String
            })
        ),
        options:{
            label: 'What goals did you have for PE since 2011?(List up to 5)',
            item: {
                fields:{
                    goal:{
                        label:'Goal',
                        error: 'Please enter a goal.'
                    },
                    degreeMet:{
                        label:'To what degree did you meet the goal on a scale of 1-10',
                        error: 'Please select a value.'
                    },
                    why:{
                        label:'Why?',
                        error: 'Specifically, what factors aided or inhibited your progress?'
                    }
                }

            }
        }

    }

};