import t from "../components/templates";
import { DreamsRemember } from "./contents";



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
            id: 'step22+v0.0.0.1'
          }
        }
    },
2:{
  type:t.struct({
    dreamsDescribe:t.String,
    dreamsRemember:DreamsRemember,
    dreamsComeTrue:t.Boolean
    }),
    options:{
      label:'What do you dream about?',
      fields: {
        dreamsDescribe: {
          label:'Describe the general themes, quality and lucidity of your dreams'
        },
        dreamsRemember:{
          label:'How often do you remember your dreams?'
        },
        dreamsComeTrue: {
          label:'Have your dreams ever come true (i.e., you dreamt about something and then it happened)'
        }
      }
    }
},
3: {
  type: t.struct({
    field: t.list(
      t.struct({
        dream:t.maybe(t.String)
      })
    ),
  }),
  options: {
    fields : {
    field: {
      label: 'For the remainder of the program (8 Nights of Dreaming), try to remember and write your dreams down first thing in the morning – or even if you wake up in the middle of the night, the way Jason described his experience in the video. Be sure to note what themes, characters, settings, fears, hopes and aspirations were present.',
      item: {
        fields: {
          dream: {
            label: 'Dream'
          }
        }
      }
    }
  }
}
},
4: {
  type:t.String,
  options:{
    label:'What are your life dreams? This doesn’t have to be restricted to what your literal dreams (during sleep) are. Right now, go beyond 2020 and even your 20/20 BHAGs (from Day 21’s Assignment)... and allow yourself to dream, in this moment, about everything you want your life to be. Anything is possible. Describe what you see.',
    auto: 'none'
  }
}
};