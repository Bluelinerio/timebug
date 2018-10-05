import R from 'ramda'

type RecentGoal = {
  goal: string,
  goalTypes:
    | 'Energy & Time'
    | 'Achievement & Skills'
    | 'Health Indicators'
    | 'Internal Qualities'
    | 'Environment'
    | 'Material Outcomes'
    | 'Relationship Quality'
}

const evaluateGoalTypes = (recentGoals: Array<RecentGoal>) => {
  const ItemComparable = {
    innerProp: 'goalTypes',
    prop: 'recentGoals',
    items: [
      'Achievement & Skills',
      'Health Indicators',
      'Internal Qualities',
      'Relationship Quality'
    ],
    pass: 'accurate and safe',
    fail: 'maintaining control and moving forward'
  }

  const count = ({ items, innerProp, pass, fail }) =>
    R.countBy(item => (items.includes(item[innerProp]) ? pass : fail))

  return x =>
    R.compose(
      R.nth(1),
      R.nth(0),
      R.sort((a, b) => parseInt(b[0]) - parseInt(a[0])),
      R.toPairs,
      R.invertObj,
      count(x)
    )(ItemComparable)(recentGoals)
}

export const step5ForLater = ({ recentGoals }) =>
  `Goal types can help reveal your predominant mindset in life.${
    recentGoals.length > 0
      ? ` You care about ${evaluateGoalTypes(recentGoals)}`
      : ``
  }`
