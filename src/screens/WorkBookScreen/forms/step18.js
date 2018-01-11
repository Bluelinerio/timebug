import t from "../components/templates";


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
                    label:'What changes have taken place in your PE since 2011?(i.e. you moved, downsized your home, moved in with a new roommate, bought more plants for the house, etc).',                    
                    auto:'none',
                    error: 'Please fill out the field.'
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
          error: 'Please fill out the field.'
        }
    },
    3: {
        type: t.String,
        options: {
          label:'Are you truly happy where you are or do you stay there because you are afraid of change (or because this is all you’ve ever known)?',
          error: 'Please fill out the field.'
        }
    },
    4: {
        type: t.Boolean,
        options: {
            label: 'Do you authentically connect to the culture in your town or city?',
            error: 'Please fill out the field.'
        }
    },
    5: {
        type: t.Boolean,
         options: {
            label: 'Do you feel like you’re surrounded by like minded people or that you can get your social needs met in this environment (depending on which ones are priority) in terms of (friends, family, dating life, night life, hobbies, nature, music/art scene, affordability, etc)?',
            error: 'Please fill out the field.'
         }
    },
    6: {
        type: t.Boolean,
         options: {
             label: 'Do the climate elements(ie. humid, dry, rainy, etc) suit you here, physically and mentally)?',
             error: 'Please fill out the field.'
         }
    },
    7: {
        type: t.list(
            t.struct({
                goal:t.String,
                degreeMet:t.Number,
                why:t.String

            })
        ),
        options:{
            label: 'What goals did you have for PE since 2011?(List up to 5.)',
            item: {
                fields:{
                    goal:{
                        label:'Goal',
                        error: 'Please fill out the field.'
                    },
                    degreeMet:{
                        label:'To what degree did you meet the goal on a scale of 1-10',
                        error: 'Please fill out the field.'
                    },
                    why:{
                        label:'Why?',
                        error: 'Please fill out the field.'
                    }
                }

            }
        }

    }

};