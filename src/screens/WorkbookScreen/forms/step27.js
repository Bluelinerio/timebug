import t from "../components/templates";
import { Emotion } from "./contents";


export default {
  1:{
    type:t.struct({
      id:t.maybe(t.String),
      breath:t.String
    }),
    options: {
      fields: {
        id:{
          hidden: true
        },
        breath: {
          label:'Take in a deep breath. Then, breathe fully out of the mouth. What does your nervous system think about this receiving and giving of breath?',          
          multiline: true
        }
      }
    },
    value : {
      fields: {
        id: 'step27+v0.0.0.1'
      }
    }
    
  },
  2:{
    type:t.struct({

     replacements:t.String,
     relationshipToSelf:t.String
    }),
    options:{
      fields:{
        replacements:{
          label:'What old thoughts will you replace with new ones that will create new trust and a new experience?',
          help: '(e.g., Old Thinking = “Missed another workout today. I am so lazy.” vs. New Thinking = “Maybe I’m not getting enough rest. I’m going to take it easy on myself today."',
          multiline: true
        },
        relationshipToSelf:{
          label:'What will your relationship to self look like in 5 years?',
          multiline: true
          
        }
      }
    }
  },
  3:{
    type:t.list(Emotion),
    options:{
      label:'What are 3 feelings that you will feel about yourself 5 years from now?',
      maxLines:3
      }   
  },
  7:{
    type:t.list(
         t.struct({
         person:t.String,
         })
       ),
    options:{
      label:'Who are 3 different people you will value or value more than you do now?',
      item: {
        fields:{
          auto:'placeholders',
          person: {
          },
        },
      },
      maxLines:3
    }
  },
  8:{
    type:t.String,
    options: {
      label:'What have you done by 2020 to heal and repair the relationships that you noted have regressed in the Day 17 Assignment?',
      error:'Please fill out this field'
    }
  },
  9:{
    type:t.list(t.String),
    options:{
      label:'What 3 needs (physical, emotional or mental) will you have in your life 5 years from now? ',
      placeholder: 'Needs',
      maxLines:3
    }

  },
  10:{
    type:t.Boolean,
    options:{
      label:'Are you willing to communicate these needs to another person in the spirit of mutual giving?',
    }
  },
  11:{
    type:t.String,
    options: {
      label:'What do you want to give more of to others in 5 years?',
    }
  },
  12:{
    type:t.Boolean,
    options: {
      label:'What do you want to receive more of from others in 5 years?'
    }
  }
};
