import t from "../components/templates";
import { PillarsOfLife, InteractionFrequency } from "./contents";

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      advisors: t.list(
        t.struct({
          boardMember: t.String,
          pillarsOfLife: PillarsOfLife,
          interactionFrequency: InteractionFrequency
        })
      )
    }),
    options: {
      label: "Who is on your Board of Advisors?",
      fields: {
        id: {
          hidden: true
        },
        advisors: {
          item: {
            fields: {
              boardMember: {
                auto: "labels"
                //error: "Think about someone who's advice you would value regarding big decisions"
              },
              pillarsOfLife: {
                auto: "labels"
                //error: 'Assign this person to one of the 7 Timebug Life Categories'
              },
              interactionFrequency: {
                auto: "labels"
                //error: "How often do you interact with this person?"
              }
            }
          },
          disableOrder: true,
          maxLines: 15,
          config: {
            maxLines: 15
          }
        }
      }
    },
    value: {
      fields: {
        id: "step4+v0.0.0.1"
      }
    }
  },
  2: {
    type: t.struct({
      supportGroups: t.list(
        t.struct({
          supportGroup: t.String,
          pillarsOfLife: PillarsOfLife
        })
      )
    }),
    options: {
      label:
        "List any current or potential support groups and meetups, formal or informal, that are a source of positive energy for you, in one or more domains of life.",
      fields: {
        supportGroups: {
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10
          },
          item: {
            fields: {
              supportGroup: {
                auto: "labels"
                //error: "Please enter the name of a support group"
              },
              pillarsOfLife: {
                auto: "labels"
                //error: "Please select a Life Category."
              }
            }
          }
        }
      }
    }
  }
};
