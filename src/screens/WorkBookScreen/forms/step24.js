import t from "../components/templates";



export default {
    1:{ 
      type: t.struct({
        id: t.maybe(t.String),
        mantraAnswer: t.Boolean,
        exerciseAnswer: t.Boolean,
        meditateAnswer: t.Boolean,
      }),
      options: {
        fields: {
          id: {
            hidden: true
          },
          mantraAnswer: {
            label: 'Did you do your mantra today (assigned on Day 21)?'
          },
          exerciseAnswer: {
            label: 'Did you exercise and meditate yet today(assigned on Day 8)?',
          },
          meditateAnswer: {
            label: 'Did you MEDITATE yet today(assigned on Day 8)?'
          }
        },
      },
      value : {
        fields: {
          id: 'step24+v0.0.0.1'
        }
      }
    },
2:{ 
  type:t.String,
  options: {
    label:'The year is 2020. How much money does you bank have in it? Take a picture or screenshot of your current bank account balance, print it out, and edit the date and cash balance, writing in 12/31/2020 and your desired number.',
    error: 'Please fill out this field.'
  }
},
2:{
  type:t.String,
  options: {
    label:'Write a short story about what it will take for you to achieve your Money BHAG?',
    error: 'Please fill out this field.'
  }
},
4:{
  type:t.list(
    t.String
  ),
  options:{
    label:'Who is your “finance team” that has helped you to not only attain but also manage your financial success?',
    item:{
      placeholder:'Person',
      error: 'Please fill out this field.'
    }
  }
},
5:{
  type:t.String,
  options: {
    label:'What do you plan to do with any excess money that you come into by 2020?',
    error: 'Please fill out this field.'
  }
},
6:{
  type:t.String,
  options: {
    label:'Describe how your life will be different in 2020, as a result of the achievement of your Money BHAG.',
    error: 'Please fill out this field.'
  }
},
7:{
  type:t.String,
  options: {
    label:'How much more or less will you work as a result?',
    error: 'Please fill out this field.'
  }
},
8:{
  type:t.Number,
  options: {
    label:'How many days a year will you be off or on vacation?',
    error: 'Please fill out this field.'
  }
},
9:{
  type:t.String,
  options: {
    label:'What additional material things will you have or have access to that you now don’t?',
    error: 'Please fill out this field.'
  }
},
10:{
  type:t.String,
  options: {
    label:'How will you feel, that is different than what you feel now?',
    error: 'Please fill out this field.'
  }
},
11:{
  type:t.String,
  options: {
    label:'Think about one other person in your life, who you want to see succeed with and change their relationship to money. Who is it?',
    error: 'Please fill out this field.'
  }
},
12:{
  type:t.String,
  options: {
    label:'How do you want to see them change their financial fortunes by 2020?',
    error: 'Please fill out this field.'
  }
},
13:{
  type:t.String,
  options: {
    label:'How can you help them achieve this goal?',
    error: 'Please fill out this field.'
  }
},
14:{
  type:t.String,
  options: {
    label:'List one wish that you have for the world or a particular sector of the world when it comes to money.',
    error: 'Please fill out this field.'
  }
},
15:{
  type:t.String,
  options: {
    label:'What group of people or country can be most influential in helping this goal be attained?',
    error: 'Please fill out this field.'
  }
}
};