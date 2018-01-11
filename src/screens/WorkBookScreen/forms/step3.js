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
          label: "List 3-5 Charachter Strengths of yours, and the resulting goals that you achieved.",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
          item: {
            fields: {
              strengthsSelfView: {
                error: "Please select a value."
              },
                resultingGoalAchieved:{
                  error: "Please fill out this field."
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
          label: "List 3-5 Charachter Traits that have held you back from achieving your goals.",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 5,
          config: {
            maxLines: 5,
          },
          item: {
            fields: {
              weaknessSelfView: {
                error: "Please select a value."
              },
              goalNotReached:{
                  error: "Please fill out this field."
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
        label: "List 3-5 Charachter Strengths and Weaknesses from a friend or family member's point of view.",
        fields: {
          friendsName: {
            error: "Please fill out this field.",
            label: "Write down your friend or family member's name."
          },
          strengthFriendView: {
            label:"Select 3-5 charachter strengths from your friend or family member's point of view.",
            error:"Please select a value."
        },
          weaknessFriendView: {
            label:"Select 3-5 charachter weaknesses from your friend or family member's point of view.",
            error:"Please select a value.",
            config: {
              minLines:3,
            },
          }
        }
      }
  }
};