import t from "../components/templates";
import { DreamsRemember } from "./contents";



export default {
    1:{ 
        type:t.struct({
          id:t.maybe(t.String),
          yes:t.Boolean,
          no:t.Boolean
        }),
        options: {
          label:'Did you do your MANTRA today(assigned on Day 21)?',
          fields:{
            id: {
              hidden: true
            }
          },
          auto:'labels'
        },
        value : {
          fields: {
            id: 'step22+v0.0.0.1'
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
  type:t.struct({
    dreamsDescribe:t.String,
    dreamsRemember:DreamsRemember,
    dreamsComeTrue:t.struct({
        yes:t.Boolean,
        no:t.Boolean
      }),
    }),
    options:{
      label:'What do you dream about?',
      fields: {
        dreamsDescribe: {
          label:'Describe the general themes, quality and lucidity of your dreams'
        },
        dreamsRemember:{
          label:'How often do you remember your dreams?',
          fields: {
            a:{
              label:'a)Daily'
            },
            b:{
              label:'b)Most of the time'
            },
            c:{
              label:'c)Occasionally'
            },
            d:{
              label:'d)Rarely'
            },
            e:{
              label:'e)Never'
            }
          }
        },
        dreamsComeTrue: {
          label:'Have your dreams ever come true (i.e., you dreamt about something and then it happened)'
        }
      }
    }
},
5: {
  type: t.struct({
    id:t.maybe(t.String),
    field: t.list(
      t.struct({
        dream:t.maybe(t.String)
      })
    ),
  }),
  options: {
    label:'For the remainder of the program (8 Nights of Dreaming), try to remember and write your dreams down first thing in the morning – or even if you wake up in the middle of the night, the way Jason described his experience in the video.',
    field: {
      label: 'Be sure to note what themes, characters, settings, fears, hopes and aspirations were present.',
      item: {
        fields: {
          dream: {
            label: 'Dream'
          }
        }
      }
    }
  }
},
6: {
  type:t.maybe(t.String),
  options:{
    label:'What are your life dreams? This doesn’t have to be restricted to what your literal dreams (during sleep) are. Right now, go beyond 2020 and even your 20/20 BHAGs (from Day 21’s Assignment)... and allow yourself to dream, in this moment, about everything you want your life to be. Anything is possible. Describe what you see.',
    auto: 'none'
  }
}
};