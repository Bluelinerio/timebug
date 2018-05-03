import {
  HOME_SCREEN,
  DONE_SCREEN,
  REFLECTION,
  TEAMWORK,
  GOALS,
  CAREER,
  HOBBIES,
  HEALTH,
  RELATIONSHIPS,
  ENVIRONMENT,
  SPIRITUALITY,
  PHASE1,
  PHASE2,
  PHASE3,
} from './constants'

const categoyMotivation = {
  [REFLECTION]: {
    [HOME_SCREEN]: ({ suggestedNextStep }) =>
      `Based on your activity so far, it seems like this app is helping you with instrospection and self reflection. We love that! You might want to try ${suggestedNextStep}`,
    [DONE_SCREEN]: ({ suggestedNextStep, previousStep }) =>
      `Nice job, you've completed ${previousStep}. Based on your activity so far, it seems like this app is helping you with instrospection and self reflection. We love that! You might want to try ${suggestedNextStep}`
  },
  [TEAMWORK]: {
    [HOME_SCREEN]: ({ suggestedNextStep }) =>
      `You've really been utilizing all the connectivity provided by this app. Community and team work are foundational pillars of the 20/20 Life Vision! You'll find more opportunities like this in ${suggestedNextStep}.`,
    [DONE_SCREEN]: ({ suggestedNextStep, previousStep }) =>
      `Nice job, you've completed ${previousStep}. You've really been utilizing all the connectivity provided by this app. Community and team work are foundational pillars of the 20/20 Life Vision! You'll find more opportunities like this in ${suggestedNextStep}.`
  },
  [GOALS]: {
    [HOME_SCREEN]: ({ suggestedNextStep }) =>
      `It looks like you're finding this app using for setting and tracking your goals. This is central to success in the 20/20 Life Vision Challenge. We suggest you continue the good work with ${suggestedNextStep}.`,
    [DONE_SCREEN]: ({ suggestedNextStep }) =>
      `This last exercise centered around goal setting and tracking. This is central to success in the 20/20 Life Vision Challenge. We suggest you continue the good work with ${suggestedNextStep}.`
  },
  [CAREER]: {
    [HOME_SCREEN]: ({ suggestedNextStep }) =>
      `At timebug, we believe working towards a completely fulfilling career, as opposed to 'just a job', is essential for well-being. Based on your activity, it looks like you have a particular interest in this area. Why not continue your great work in ${suggestedNextStep}.`,
    [DONE_SCREEN]: ({ suggestedNextStep }) =>
      `This last exercise centered around career, one of the 7 Pillars of Life. At timebug, we believe working towards a completely fulfilling career, as opposed to 'just a job', is essential for well-being. Based on your activity, it looks like you have a particular interest in this area. Why not continue your great work in ${suggestedNextStep}..`
  },
  [HOBBIES]: {
    [HOME_SCREEN]: ({ suggestedNextStep }) =>
      `Work/Life balance an essential part of the Timebug philosophy - don't forget to make space for your personal aims and hobbies. With this in mind, we suggest you continue with ${suggestedNextStep}.`,
    [DONE_SCREEN]: ({ suggestedNextStep }) =>
      `This last exercise centered around aims and hobbies, one of the 7 Pillars of Life. Work/Life balance an essential part of the Timebug philosophy - don't forget to make space for your personal aims and hobbies! With this in mind, we suggest you continue with ${suggestedNextStep}.`
  },
  [HEALTH]: {
    [HOME_SCREEN]: ({ suggestedNextStep }) =>
      `Work/Life balance an essential part of the Timebug philosophy - don't forget to make space for your personal aims and hobbies. With this in mind, we suggest you continue with ${suggestedNextStep}.`,
    [DONE_SCREEN]: ({ suggestedNextStep }) =>
      `This last exercise centered around aims and hobbies, one of the 7 Pillars of Life. Work/Life balance an essential part of the Timebug philosophy - don't forget to make space for your personal aims and hobbies! With this in mind, we suggest you continue with ${suggestedNextStep}.`
  },
  [RELATIONSHIPS]: {
    [HOME_SCREEN]: ({ suggestedNextStep }) =>
      `It might be a cliche, but giving and recieving are truly of equal importance in the Timebug philosophy. With that in mind, we suggest you continue with ${suggestedNextStep}.`,
    [DONE_SCREEN]: ({ suggestedNextStep }) =>
      `Based on your activity so far, it seems like Relationships are a particular area of interest for you. Healthy interpersonal relationships are a huge key to success on the 20/20 Life Vision Challenge. Keep up the good work in this area with ${suggestedNextStep}.`
  },
  [ENVIRONMENT]: {
    [HOME_SCREEN]: ({ suggestedNextStep }) =>
      `A healthy environment in which you feel well situated is essential to unveiling your higher purpose. Continue the great work in this area with ${suggestedNextStep}.`,
    [DONE_SCREEN]: ({ suggestedNextStep }) =>
      `This last exercise was based on Environment, one of the 7 Pillars of Life. A healthy environment in which you feel well situated is essential to unveiling your higher purpose. Continue the great work in this area with ${suggestedNextStep}.`
  },
  [SPIRITUALITY]: {
    [HOME_SCREEN]: ({ suggestedNextStep }) =>
      `Based on your activity so far, it looks like Spirituality is an area of particular importance for you. We feel the same way at Timebug - that's why it's one of the 7 Pillars of Life. Keep up your great work in this area with ${suggestedNextStep}.`,
    [DONE_SCREEN]: ({ suggestedNextStep, previousStep }) =>
      `Nice job, ${previousStep} is complete. Based on your activity so far, it looks like Spirituality is an area of particular importance for you. We feel the same way at Timebug - that's why it's one of the 7 Pillars of Life. Keep up your great work in this area with ${suggestedNextStep}.`
  },
  [PHASE1]: {
    [HOME_SCREEN]: ({ suggestedNextStep, previousStep }) =>
      `With the completion of ${previousStep}, you're almost done with Phase 1:Meditation! Keep up the great work with ${suggestedNextStep}.`,
    [DONE_SCREEN]: ({ suggestedNextStep }) =>
      `You're almost done with Phase 1:Meditation! Keep up the great work with ${suggestedNextStep}.`
  },
  [PHASE2]: {
    [HOME_SCREEN]: ({ suggestedNextStep, previousStep }) =>
      `With the completion of ${previousStep}, you're almost done with Phase 2:Assessment! Keep up the great work with ${suggestedNextStep}.`,
    [DONE_SCREEN]: ({ suggestedNextStep }) =>
      `You're almost done with Phase 2:Assessment! Keep up the great work with ${suggestedNextStep}.`
  },
  [PHASE3]: {
    [HOME_SCREEN]: ({ suggestedNextStep, previousStep }) =>
      `With the completion of ${previousStep}, you're almost done with Phase 3:Vision Creation! Keep up the great work with ${suggestedNextStep}.`,
    [DONE_SCREEN]: ({ suggestedNextStep }) =>
      `You're almost done with Phase 1:Vision Creation! Keep up the great work with ${suggestedNextStep}.`
  }
}

export default categoyMotivation