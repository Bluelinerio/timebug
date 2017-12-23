import t from "../components/templates";



export default {
    1:{ 
        type:t.struct({
          id:t.maybe(t.String),
          yes:t.Boolean,
          no:t.Boolean
        }),
        options: {
          label:'Did you do your MANTRA today(assigned on Day 21)?',
          fields: {
            id: {
              hidden: true
            }
          },
          auto:'labels'
        },
        value : {
          fields: {
            id: 'step24+v0.0.0.1'
          }
        }
    },
    2:{ 
      type:t.struct({
        yes:t.Boolean,
        no:t.Boolean
      }),
      options: {
        label:'Did you EXERCISE and meditate yet today(assigned on Day 8)?',
        auto:'labels'
      }
  },
  3:{ 
    type:t.struct({
      yes:t.Boolean,
      no:t.Boolean
    }),
    options: {
      label:'Did you MEDITATE yet today(assigned on Day 8)?',
      auto:'labels'
    }
},
4:{ 
  type:t.String,
  options: {
    label:'The year is 2020. How much money does you bank have in it? Take a picture or screenshot of your current bank account balance, print it out, and edit the date and cash balance, writing in 12/31/2020 and your desired number.',
  }
},
5:{
  type:t.String,
  options: {
    label:'Write a short story about what it will take for you to achieve your Money BHAG?',
  }
},
6:{
  type:t.list(
    t.String
  ),
  options:{
    label:'Who is your “finance team” that has helped you to not only attain but also manage your financial success?',
    item:{
      placeholder:'Person'
    }
  }
},
7:{
  type:t.String,
  options: {
    label:'What do you plan to do with any excess money that you come into by 2020?',
  }
},
8:{
  type:t.String,
  options: {
    label:'Describe how your life will be different in 2020, as a result of the achievement of your Money BHAG.',
  }
},
9:{
  type:t.String,
  options: {
    label:'How much more or less will you work as a result?',
  }
},
10:{
  type:t.Number,
  options: {
    label:'How many days a year will you be off or on vacation?',
  }
},
11:{
  type:t.String,
  options: {
    label:'What additional material things will you have or have access to that you now don’t?',
  }
},
12:{
  type:t.String,
  options: {
    label:'How will you feel, that is different than what you feel now?',
  }
},
13:{
  type:t.String,
  options: {
    label:'Think about one other person in your life, who you want to see succeed with and change their relationship to money. Who is it?',
  }
},
14:{
  type:t.String,
  options: {
    label:'How do you want to see them change their financial fortunes by 2020?',
  }
},
15:{
  type:t.String,
  options: {
    label:'How can you help them achieve this goal?',
  }
},
16:{
  type:t.String,
  options: {
    label:'List one wish that you have for the world or a particular sector of the world when it comes to money.',
  }
},
17:{
  type:t.String,
  options: {
    label:'What group of people or country can be most influential in helping this goal be attained?',
  }
}
};