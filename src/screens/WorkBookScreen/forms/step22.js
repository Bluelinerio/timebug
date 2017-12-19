import t from "../components/templates";



export default {
    1:{ 
        title:'Did you do your MANTRA today(assigned on Day 21)?',
        type:t.struct({
          id:t.maybe(t.String),
          yes:t.Boolean,
          no:t.Boolean
        }),
        options: {
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
  title:'What do you dream about?',
  type:t.struct({
    dreamsDescribe:t.String,
    dreamsRemember:t.struct({
        a:t.Boolean,
        b:t.Boolean,
        c:t.Boolean,
        d:t.Boolean,
        e:t.Boolean
      }),
    dreamsComeTrue:t.struct({
        yes:t.Boolean,
        no:t.Boolean
      }),
    }),
    options:{
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
  title:'For the remainder of the program (8 Nights of Dreaming), try to remember and write your dreams down first thing in the morning – or even if you wake up in the middle of the night, the way Jason described his experience in the video.',
  type:t.list(
    t.struct({
      dream:t.maybe(t.String)
    })
  ),
  options: {
    label: 'Be sure to note what themes, characters, settings, fears, hopes and aspirations were present.',
    item: {
      fields: {
        dream: {
          label: 'Dream'
        }
      }
    }
  }
},
6: {
  title:'What are your life dreams? This doesn’t have to be restricted to what your literal dreams (during sleep) are. Right now, go beyond 2020 and even your 20/20 BHAGs (from Day 21’s Assignment)... and allow yourself to dream, in this moment, about everything you want your life to be. Anything is possible. Describe what you see.',
  type:t.maybe(t.String),
  options:{
    auto: 'none'
  }
}
};