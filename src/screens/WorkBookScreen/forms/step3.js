import t from "../components/templates";
import { CharachterStrengths, CharachterWeaknesses } from "./contents";

export default {
  1: {
    title: "List 3-5 Charachter Strengths of yours, and the resulting goals that you achieved.",
    type: t.struct({
      field: t.list(
        t.struct({
          strengthsSelfView: CharachterStrengths,
          resultingGoalsAchieved: t.String
         })
      )
    }),
    options: {
      fields: {
        field: {
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
        },
      }
    }
  },
  2: {
    title: "List 3-5 Charachter Traits that have held you back from achieving your goals.",
    type: t.struct({
      field: t.list(
        t.struct({
          weaknessSelfView: CharachterWeaknesses,
          goalsNotReached: t.String
         })
      )
    }),
    options: {
      fields: {
        field: {
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 5,
          config: {
            maxLines: 5,
          },
        },
      }
    }
  },
  3: {
    title: "List 3-5 Charachter Strengths from a friend or family member's point of view.",
    type: t.struct({
        friendsName: t.String,
        strengthFriendView: t.list(CharachterStrengths),
        weaknessFriendView: t.list(CharachterWeaknesses)
      }),
      options: {
        fields: {
          friendsName: {
            label: "Write down your friend or family member's name."
          },
          strengthFriendView: {
            label:"Select 3-5 charachter strengths from your friend or family member's point of view.",
            maxLines: 5,
            config: {
              maxLines: 5,
            },
            
        },
          weaknessFriendView: {
            label:"Select 3-5 charachter weaknesses from your friend or family member's point of view.",
            maxLines: 5,
            config: {
              minLines:3,
            },
          }
        }
      }
  }
};