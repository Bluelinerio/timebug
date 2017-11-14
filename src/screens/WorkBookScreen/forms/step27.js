import t from "../components/templates";



export default {
  1:{
    title:'The first way I want to encourage a healthier flow of giving and receiving is to take deep, proactive breaths. As you breathe IN, you receive. As you breathe OUT, you assert or give back to life. So take a deep breath in the nose, filling up the lower belly. Then breathe fully out of the mouth with an open, dropped jaw. Do this fully in both directions. This will show your nervous system how safe you are do engage in the act of giving and receiving. This is the foundational work. Did you do this?',
    type:t.struct({
      id:t.String,
      yes:t.Boolean,
      no:t.Boolean
    }),
    options: {
      fields: {
        id:{
          hidden: true
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
    title:'Now ask yourself what you discovered in the first inventory about how you have typically treated yourself in the last five years?',
    type:t.struct({
     inventory:t.String,
     reality2020:t.String,
     replacements:t.String,
     relationshipToSelf:t.String
    }),
    options:{
      fields:{
        inventory:{
          label:'Inventory Summary'
        },
        reality2020:{
          label:'Is that reality where you want to find yourself in 2020?'
        },
        replacements:{
          label:'If no, list out a few of those replacement self-thoughts that you intend to actualize going forward'
        },
        relationshipToSelf:{
          label:'Describe your relationship to self in 2020.'
        }
      }
    }
  },
  3:{
    title:'Replacing your habitual negative thinking (internal messages) with purposely looking for things to acknowledge about yourself. This can be simply, small things. So scan your life and get in a daily practice of acknowledging yourself. Find things that encourage a consistent, positive, and self-affirming view of yourself.',
    type:t.struct({
      field1:t.String,
      field2:t.String,
      field3:t.String
    }),
    options:{
      fields:{
        field1:{
          label:'I am proud of myself for _________ that I took(at some point)'
        },
        field2:{
          label:'I feel great that I chose ________ or that I treated someone well or _________'
        },
        field3:{
          label:'I want to acknowledge my gift/talent/ability _________'
        }
      }
    }
    
  },
  4:{
    title:'Write a few down several days in a row. Repeat that for several weeks, until it becomes a more natural part of your life. This is GIVING to self... and letting yourself feel the impact of those positive, honest messages will enhance how you receive.',
    type:t.struct({
      day1:t.String,
      day2:t.String,
      day3:t.String
    }),
    options:{
      auto:'labels'
    }
  },
  5:{
    title:'Final piece of your relationship to self. Get used to stopping several times a day to ask yourself: “What are 3 feelings that I am feeling right now in this moment?” To get a list of feelings with some wonderful clues, visit http://www.ronbaker.net/feelings/',
    type:t.struct({
      feeling1:t.String,
      feeling2:t.String,
      feeling3:t.String
    }),
    options:{
      auto:'labels'
    }
  },
  6:{
    title:'What did you discover from your first inventory about giving and receiving with others from the last 5 years?',
    type:t.struct({
      field1:t.String,
      field2:t.String,
      field3:t.String
    }),
    options:{
      fields:{
        field1:{
          label:'Write down your thoughts from your first inventory about giving and receiving with others'
        },
        field2:{
          label:'Is that where you would like to find yourself in 2020?'
        },
        field3:{
          label:'If not, then are you willing to interrupt old choices that no longer serve you AND replace them with healthier alternatives?'
        }
      }
    }
  },
  7:{
    title:'PREPARE for moments to come with your various relationships, by making yourself aware of some of the things you value and appreciate about others. Remember, when you have a moment of connection with each of those people, be willing to share out loud ONE thing that you appreciate about them.',
    type:t.struct({
       people:t.list(
         t.struct({
         person:t.String
         })
       ),
       thingsValued:t.list(
        t.struct({
        thing:t.String
        })
      ),
      relationshipState:t.list(
        t.struct({
        thing:t.String
        })
      )
    }),
    options:{
      fields:{
        people:{
         label:'Name 3 different people you value.'
        },
        thingsValued:{
          label:'Name 3 specific things you appreciate and value about each one.'
        },
        relationshipState:{
          label:'Describe the state of your relationships in 2020'
        }
      }
    }
  },
  8:{
    title:'What have you done by 2020 to heal and repair the relationships that you noted have regressed in the Day 17 Assignment?',
    type:t.String
  },
  9:{
    title:'In order to create a balance of what you give, what specific needs are you aware of that you have in your life (physical, emotional or mental needs)? List them here, at least 3 for each category (physical, mental, emotional). As you learn to identify those needs, it becomes safe to then communicate them one at a time to others.',
    type:t.struct({
      physical1:t.String,
      physical2:t.String,
      physical3:t.String,
      mental1:t.String,
      mental2:t.String,
      mental3:t.String,
      emotional:t.String,
      emotional2:t.String,
      emotional3:t.String
    }),
    options:{
      physical1:{
        label:'Physical',
        placeholder:'Physical Need',
        auto:'none'
      },
      physical2:{
        auto:'none',
        placeholder:'Physical Need'
      },
      physical3:{
        auto:'none',
        placeholder:'Physical Need'
      },
      mental1:{
        auto:'none',
        label:'Mental',
        placeholder:'Mental Need'
      },
      mental2:{
        auto:'none',
        placeholder:'Mental Need'
      },
      physical3:{
        auto:'none',
        placeholder:'Mental Need'
      },
      emotional:{
        auto:'none',
        label:'Emotional',
        placeholder:'Emotional Need'
      },
      emotional2:{
        auto:'none',
        placeholder:'Emotional Need'
      },
      emotional3:{
        auto:'none',
        placeholder:'Emotional Need'
      }
    }

  },
  10:{
    title:'Start with naming ONE need. Are you willing to communicate this need to another person, allowing yourself to receive the support? Start with simple things, to build up confidence. (i.e. I need help with moving some furniture around in my living room. I need a shoulder rub. I need someone to listen while I vent about something that just happened.) Once YOU identify the need, then you can look to your support structure to begin to practice mutual giving and receiving.',
    type:t.struct({
      need:t.String,
      communicate:t.struct({
        yes:t.Boolean,
        no:t.Boolean
      })
    }),
    options:{
      fields: {
        need:{
          label:'Name of need'
        },
        communicate:{
          label:'Willing to communicate this to another person?'
        }
      }
    }
  },
  11:{
    title:'Meditate on and come up with one 20/20 Relationship Vision for the world. This could revolve around how people all over the world treat each other, or deal with groups of people (i.e. families, specific societies/cities, countries), internally or externally (i.e. foreign relations).',
    type:t.String
  },
  12:{
    title:'If you simply ask yourself, would I be willing to offer the same thing to this friend/loved one in a similar way to how I am asking them to help support me?',
    type:t.struct({
      yes:t.Boolean,
      no:t.Boolean
    })
  }

  

};