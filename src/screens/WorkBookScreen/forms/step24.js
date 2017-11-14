import t from "../components/templates";



export default {
    1:{ 
        title:'Did you do your MANTRA today(assigned on Day 21)?',
        type:t.struct({
          id:t.String,
          yes:t.Boolean,
          no:t.Boolean
        }),
        options: {
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
      title:'Did you EXERCISE and meditate yet today(assigned on Day 8)?',
      type:t.struct({
        yes:t.Boolean,
        no:t.Boolean
      }),
      options: {
        auto:'labels'
      }
  },
  3:{ 
    title:'Did you MEDITATE yet today(assigned on Day 8)?',
    type:t.struct({
      yes:t.Boolean,
      no:t.Boolean
    }),
    options: {
      auto:'labels'
    }
},
4:{ 
  title:'The year is 2020. How much money does you bank have in it? Take a picture or screenshot of your current bank account balance, print it out, and edit the date and cash balance, writing in 12/31/2020 and your desired number.',
  type:t.String
},
5:{
  title:'Write a short story about what it will take for you to achieve your Money BHAG?',
  type:t.String
},
6:{
  title:'Who is your “finance team” that has helped you to not only attain but also manage your financial success?',
  type:t.list(
    t.String
  ),
  options:{
    item:{
      placeholder:'Person'
    }
  }
},
7:{
  title:'What do you plan to do with any excess money that you come into by 2020?',
  type:t.String
},
8:{
  title:'Describe how your life will be different in 2020, as a result of the achievement of your Money BHAG.',
  type:t.String
},
9:{
  title:'How much more or less will you work as a result?',
  type:t.String
},
10:{
  title:'How many days a year will you be off or on vacation?',
  type:t.Number
},
11:{
  title:'What additional material things will you have or have access to that you now don’t?',
  type:t.String
},
12:{
  title:'How will you feel, that is different than what you feel now?',
  type:t.String
},
13:{
  title:'Think about one other person in your life, who you want to see succeed with and change their relationship to money. Who is it?',
  type:t.String
},
14:{
  title:'How do you want to see them change their financial fortunes by 2020?',
  type:t.String
},
15:{
  title:'How can you help them achieve this goal?',
  type:t.String
},
16:{
  title:'List one wish that you have for the world or a particular sector of the world when it comes to money.',
  type:t.String
},
17:{
  title:'What group of people or country can be most influential in helping this goal be attained?',
  type:t.String
}
};