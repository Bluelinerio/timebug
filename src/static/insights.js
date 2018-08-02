//@flow
const insights = {
  '1': `According to research, regret is valuable in a number of ways, including avoiding future negative behaviors, gaining insight, and achieving social harmony`,
  '2': `Managing time is managing choices.\n\nToo many demands on your time can lead to a "scarcity mindset".\nDo you find yourself running around to take care of the problem right in front of you. Don’t neglect to take action on the things that will impact you in the long run.`,
  '3': `Remember that vulnerability is adaptive. Did you know that high-achievement is linked to the ability to be honest and share weaknesses with others?`,
  '4': `We all have blindspots. Did you know that every human overestimates the extent to which his/her internal states are detectable to others? This is a well-known bias known as the "illusion of transparency." Feedback from others helps overcome it.`,
  '5': `Goal types can help reveal your predominant mindset in life. \nIf you entered mostly Energy and Time, environment, material outcomes you may be maintaining control and moving forward. \nIf you entered mostly Achievement & Skills, Health, Internal Qualities, Relationship Quality you may tend to be accurate and safe.`,
  '6': `Studies show people who generally do more for others tend to have more positive emotions.`,
  '7': `High expectations of goal success can lead to increased goal commitment and energy.\n Dreaming about the future calms you down, measurably reducing systolic blood pressure, but it also can drain you of the energy you need to take action in pursuit of your goals. Be positive but realistic.`,
  '8': `Studies show that if you believe willpower is a limited resource, then you will in fact have a finite source of mental energy. If you believe it to be endless, then it will be. (Dweck on Ego Depletion)`,
  '9': `Role models can motivate you only if they are people whose achievements you find realistically attainable. Don’t let looking up bring you down.`,
  '10': `Humans have multiple personalities that come out in different situations. Try to take note of behavioral patterns.`,
  '11': `Nostalgic reflection activates social connectedness goals and increases intentions to connect with friends.`,
  '12': `Both positive and negative life events that bring change to a person’s life can lead to stress.  Changes plays a significant role in producing anxiety and depression.`,
  '13': `Humans are very bad at predicting how they will feel when doing something in the future. Reflecting on the emotions you felt at a past job can help uncover the right one for you.`,
  '14': `Mental accounting, the tendency to categorize money in to separate mental “money jars” depending on the money source, is a huge contributor to low rates of savings. Think of all income as earned (not bestowed) and cash (not credit).`,
  '15': `Solitude and “me time” allows you to better identify toxic factors in your daily social settings that you may not be aware of, reducing chronic anxiety.`,
  '16': `Seeing people who look sick actually triggers an increased immune system response, as compared to blindly being exposed to germs.`,
  '17': `We rely on people for storing knowledge as we do with our computers. Break ups are especially difficult because, in a way, you are losing a “memory bank".`,
  '18': `Introverts report a preference for mountain scenes over beach scenes. Where you choose to live tends to reveal various personality factors.`,
  '19': `Faith heals. Spiritual practices (e.g., prayer, meditation) have been shown to increase the rate of surgical recovery, immunity substances and reduce blood pressure and depression rates.`,
  '20': `Self awareness is very difficult but critical for personal growth. Negative feelings often arise during self reviews, but they motivate you to reduce discrepancies between your current behavior and long-term goals.`,
  '21': `The more options you have, the less likely you are to make a decision at all. When you’re planting your life seeds, limit your array of possibilities.`,
  '22:': `The overall emotional tone, not content, of your dreams provides useful insight about your recent internal mood state.`,
  '23': `Major life decisions, including switching careers, are best made by our “gut.” The unconscious mind is much better at weighing multiple, complex factors than the conscious mind.`,
  '24': `According to research, humans are really bad at predicting what will make them happy. Money brings happiness but only up to a point. After that, generosity does.`,
  '25:': `You can “catch” extra willpower from the people around you. Goals are contagious. If you are dreaming about your bucket list, surround yourself with other people who are trying to accomplish their own.`,
  '26': `Visulalizing a certain area of the body recuperating from an injury or disease can increase speed and coordination by building confidence and self-esteem.`,
  '27': `When people reflect on their personal flaws with compassion, it fosters the belief that they can improve, and their ambition to do so.`,
  '28': `You influence your environment just as much as it influences you.  Expand your horizons, literally.`,
  '29': `Those who show a proclivity for spiritual acceptance were shown to have a higher concentration of serotonin activity, a brain receptor linked to positive emotions.`,
  '30': `Dreaming about the future calms you down, measurably reducing systolic blood pressure, but it also can drain you of the energy you need to take action in pursuit of your goals. Be positive but realistic.`
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
