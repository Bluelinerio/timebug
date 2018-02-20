import t from "../components/templates";
import { CharachterStrengths, CharachterWeaknesses } from "./contents";

export default {
  1: {
    type: t.struct({
      id:t.maybe(t.String),
      field: t.list(
        t.struct({
          strengthsSelfView: CharachterStrengths,
          resultingGoalAchieved: t.String
         })
      )
    }),
    options: {
      fields: {
        id: {
          hidden:true
        },
        field: {
          label: "What are your strengths?",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
          item: {
            fields: {
              strengthsSelfView: {
                error: "Please select a charachter strength."
              },
                resultingGoalAchieved:{
                  error: "What is a goal that you achieved as a result of this strength of yours?"
                }
            }
          }
        },
      },
      value: {
        fields: {
          id:'step3+v0.0.0.1'
        }
      }
    }
  },
  2: {
    type: t.struct({
      field: t.list(
        t.struct({
          weaknessSelfView: CharachterWeaknesses,
          goalNotReached: t.String
         })
      )
    }),
    options: {
      fields: {
        field: {
          label: "What are your weaknesses?",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 5,
          config: {
            maxLines: 5,
          },
          item: {
            fields: {
              weaknessSelfView: {
               // error: "Please select a charachter weakness."
              },
              goalNotReached:{
                label:"What is a goal that you haven't been able to reach as a result?"
                 // error: "What was one of your goals that you were not able to achieve as a result?"
                }
            }
          }
        },
      }
    }
  },
  3: {
    type: t.struct({
        friendsName: t.String,
        strengthFriendView: t.list(CharachterStrengths),
        weaknessFriendView: t.list(CharachterWeaknesses)
      }),
      options: {
        fields: {
          friendsName: {
            label: "Write down a friend or family member's name.",
            error: "The best person to help you with this exercise is someone who you trust to me completely honest without being judgemental."
          },
          strengthFriendView: {
            label:"What does a close friend or family member, an objective one, think of your strengths?",
            error:"Please select a charachter strength."
        },
          weaknessFriendView: {
            label:"What does a close friend or family member, an objective one, think of your weaknesses?",
            error:"Please select a charachter weakness.",
            config: {
              minLines:3,
            },
          }
        }
      }
  }
};
