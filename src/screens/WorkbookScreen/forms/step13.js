import t from "../components/templates";
import {
  PaidFairly,
  TimeChanged,
  HoursPerWeek,
  OneToTenScale,
  InternalExternal
} from "./contents";

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      salaryGrowth: t.Boolean,
      paidFairly: PaidFairly,
      loveOrHateWork: OneToTenScale,
      compensationGoals: t.Boolean,
      hoursPerWeek: HoursPerWeek,
      timeChanged: TimeChanged,
      motivationLevel: OneToTenScale
    }),
    options: {
      label: "Career Assessment",
      fields: {
        id: {
          hidden: true
        },
        salaryGrowth: {
          label: "Has your salary grown (or not) in the past 5 years?"
        },
        paidFairly: {
          label: "Are you paid fairly for what you offer?"
        },
        loveOrHateWork: {
          label: "How much do you love or hate work?",
          help: "1= Hate it, 10= Love it"
        },
        compensationGoals: {
          label:
            "Did you meet whatever compensation goals you had set for this year, anytime in the last few years?"
        },
        hoursPerWeek: {
          label: "How many hours do you work on average per week?"
          //error:'Please select how many hours per week.'
        },
        timeChanged: {
          label: "Do you work more or less hours since year 1?",
          error: "Please select how your work hours have changed."
        },
        motivationLevel: {
          label: "What is your motivation level at work right now?",
          help: "1= Not at all motivated, 10= Completely motivated"
          //error:'Please fill out this field.'
        }
      }
    },

    value: {
      fields: {
        id: "step13+v0.0.0.1"
      }
    }
  },
  2: {
    type: t.struct({
      meaningfulAchievements: t.list(
        t.struct({
          meaningfulAchievement: t.String,
          whatChanged: t.String
        })
      )
    }),
    options: {
      label:
        "What meaningful achievements have you had at work over the past 5 years?",
      fields: {
        meaningfulAchievements: {
          item: {
            fields: {
              meaningfulAchievement: {
                label: "Describe an achievement"
              },
              whatChanged: {
                label:
                  "What changed, if anything, at work as a result of this achievement?"
              }
            }
          }
        }
      }
    }
  }
};
