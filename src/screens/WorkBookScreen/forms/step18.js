import t from "../components/templates";


export default {
    1: { 
        title:'What changes have taken place in your PE since 2011?(i.e. you moved, downsized your home, moved in with a new roommate, bought more plants for the house, etc).',
        type: t.struct({
            id:t.String,
            field:t.String
        }),
        options:{
            fields:{
                id:{
                    hidden:true
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
        title:'Who do you live with right now, and how does that effect your lifestyle and motivation?.',
        type: t.String
    },
    3: {
        title:'Are you truly happy where you are or do you stay there because you are afraid of change (or because this is all you’ve ever known)?',
        type: t.String
    },
    4: {
        title: 'Do you authentically connect to the culture in your town or city?',
        type: t.struct({
           yes:t.Boolean,
           no:t.Boolean
        }),
        options: {
            auto: 'labels'
        }
    },
    5: {
        title: 'Do you feel like you’re surrounded by like minded people or that you can get your social needs met in this environment (depending on which ones are priority) in terms of (friends, family, dating life, night life, hobbies, nature, music/art scene, affordability, etc)?',
        type: t.struct({
            yes:t.Boolean,
            no:t.Boolean
         }),
         options: {
             auto: 'labels'
         }
    },
    6: {
        title: 'Do the climate elements(i.e. humid, dry, rainy, etc) suit you here, physically and mentally)?',
        type: t.struct({
            yes:t.Boolean,
            no:t.Boolean
         }),
         options: {
             auto: 'labels'
         }
    },
    7: {
        title: 'What goals did you have for PE since 2011?(List up to 5.)',
        type: t.list(
            t.struct({
                goal:t.String,
                degreeMet:t.Number,
                why:t.String

            })

        ),
        options:{
            item: {
                fields:{
                    goal:{
                        label:'Goal'
                    },
                    degreeMet:{
                        label:'To what degree did you meet the goal on a scale of 1-10'
                    },
                    why:{
                        label:'Why?'
                    }
                }

            }
        }

    }

};