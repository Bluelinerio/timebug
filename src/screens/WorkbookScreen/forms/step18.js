import t from "../components/templates";
import { OneToTenScale,CommonGoalOutcomes } from "./contents";



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
                    label:'What changes have taken place in your place and environment since Year 1? '                    
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
          label:'Who do you live with right now, and how does that effect your lifestyle choices?.'
        }
    },
    3: {
        type: t.String,
        options: {
          label:'Are you truly happy where you are or do you stay there because you are afraid of change? (or because this is all you’ve ever known)?'
        }
    },
    4: {
        type: t.Boolean,
        options: {
            label: 'Do you authentically connect to the culture in your town or city?'
                }
    },
    5: {
        type: t.Boolean,
         options: {
            label: 'Are you surrounded by like minded people? Are your social needs met?'
         }
    },
    6: {
        type: t.Boolean,
         options: {
             label: 'Do the climate elements(ie. humid, dry, rainy, etc) suit you physically and mentally)?'
         }
    },
    7: {
        type: t.list(
            t.struct({
                goal:t.String,
                commonGoalOutcomes:CommonGoalOutcomes
            })
        ),
        options:{
            label: 'What were your place and environment goals since Year 1? ',
            item: {
                fields:{
                    goal:{
                        label:'Goal'
                    },
                    commonGoalOutcomes:{
                        label:'Goal Outcome',
                        help:'Classify your goal according to the 7 Goal Outcomes.'
                    }
                }

            }
        }

    }

};
