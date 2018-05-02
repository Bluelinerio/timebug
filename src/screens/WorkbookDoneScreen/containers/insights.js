//@flow
const insights = {
  '1': `According to research regret is fulfilling in a number of ways, including avoiding future negative behaviors, gaining insight, and achieving social harmony`,
  '2': `General:\nManaging time is managing choices.\n\nToo many demands on your time can lead to a "scarcity mindset".\nDo you find yourself running around to take care of the problem right in front of you. Don’t neglect to take action on the things that will impact you in the long run.`,
  '3': `Remember that vulnerability is adaptive. Did you know that high-achievement is linked to the ability to be honest and share weaknesses with others.`,
  '4': `We all have blindspots. Did you know that every human overestimates the extent to which his/her internal states are 	detectable to others—a well-known bias known as the "illusion of transparency." Feedback from others helps overcome it.`,
  '5': `Goal types can help reveal your predominant mindset in life. \nIf you entered mostly Energy and Time, environment, material outcomes you may be maintaining control and moving forward. \nIf you entered mostly Achievement & Skills, Health, Internal Qualities, Relationship Quality you may tend to be accurate and safe.`,
  '6': `Studies show people who generally do more for others tend to have more positive emotions.\n`,
  '7': `High expectations of goal success leads to increased goal commitment and energy.\n Dreaming about the future calms you down, measurably reducing systolic blood pressure, but it also can drain you of the energy you need to take action in pursuit of your goals. Be positive but realistic.`,
  '8': `Studies show that if you believe willpower is a limited resource, then you will in fact have a finite source of mental energy. If you believe its endless, then it will be. (Dweck on Ego Depletion)\n`,
  '9': `Role models can motivate you only if they are people whose achievements you find realistically attainable. Don’t let looking up bring you down.`,
  '10': `Humans have multiple personalities. They just come out in different situations. Notice the behavioral patterns.`
}

export const dummyFormValue = {
  recentGoals: [
    {
      goal: 'missing goal',
      goalTypes: 'Energy & Time'
    },
    {
      goal: 'missing goal',
      goalTypes: 'Relationship Quality'
    }
  ]
}

const getInsight = (stepId, value) => {
  const insight = insights[stepId]
  if (typeof insight === 'string') return insight
  if (typeof insight === 'function') {
    if (!value) console.error(`Mising value for insight for step ${stepId}`)
    try {
      const res = insight(value)
      return res
    } catch (e) {
      console.error(
        `Failed getting insight for step ${stepId} with value ${JSON.stringify(
          value
        )}`
      )
    }
  }
  return null
}

export default getInsight
